# react-use-konami [![Build Status](https://travis-ci.org/moldy530/react-use-konami.svg?branch=master)](https://travis-ci.org/moldy530/react-use-konami)
React custom hook to add easter egg functionality to your React components.

### Installation
``` 
npm install --save react-use-konami
```

### Usage
```js
import React from 'react';
import useKonami from 'react-use-konami';

const MyComponent = () => {
    /** 
    * takes two parameters:
    * handler: () => any
    * options?: {code: string[]}
    * 
    * the default code is: 
    *  ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter']
    */
    useKonami(() => {
        console.log('hi easter egg!');
    }, {
        code: ['ArrowUp', 'ArrowDown', 'Enter'], 
    });
    
    return <div> Hi World </div>;
}

export default MyComponent;
```
