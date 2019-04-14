# react-use-konami
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
    * options?: {code: number[]}
    * 
    * the default code is: [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13]
    * [ up, up, down, down, left, right, left, right, a, b, enter ] 
    */
    useKonami(() => {
        console.log('hi easter egg!');
    }, {
        code: [1, 2, 3], 
    });
    
    return <div> Hi World </div>;
}

export default MyComponent;
```
