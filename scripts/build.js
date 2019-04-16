'use strict';

const { rollup } = require('rollup');
const { uglify } = require('rollup-plugin-uglify');
const typescript = require('rollup-plugin-typescript2');
const exec = require('child_process').exec;

const fs = require('fs');
const rimraf = require('rimraf');

const pkg = require('../package.json');


const commonConfig = {
    input: 'src/index.ts',
    external: [
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.peerDependencies || {}),
    ],
    plugins:[
        typescript({
            typescript: require('typescript'),
        }),
    ]
};

const commonOutputConfig = file => ({
    file,
    format: 'cjs',
});

const bundles = [{
    // prod
    rollupConfig: {
        ...commonConfig,
        plugins: [
            ...commonConfig.plugins,
            uglify(),
        ]
    },
    outputConfig: {
        ...commonOutputConfig('lib/cjs/use-konami.production.min.js'),
    },
},{
    // dev
    rollupConfig: {
        ...commonConfig,
    },
    outputConfig: {
        ...commonOutputConfig('lib/cjs/use-konami.development.js')
    },
}];


function copy(fileName, dest){
    return new Promise((resolve, reject) => {
        fs.copyFile(fileName, `lib/${dest ? dest : fileName}`, (err) => {
            if (err) reject(err);
            resolve(`${fileName} was copied to lib/${dest ? dest : fileName}`);
        });
    }).then(msg => console.log(msg))
        .catch(err => console.log(err));
}

function clean(){
    return new Promise((resolve, reject) => {
        rimraf('lib', ['rmdir'], err => {
            if (err) reject(err);
            resolve(console.log(`cleaned successfully`));
        });
    });
}

(async function () {
    // clean
    await clean();

    // bundle code
    await Promise.all(bundles.map(async (bundle) => {
        const result = await rollup(bundle.rollupConfig);
        return result.write(bundle.outputConfig);
    }));

    // generate types
    await exec('npx tsc --declaration --emitDeclarationOnly');

    // copy rest of code
    await copy('npm/index.js', 'index.js');
})();
