#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

> Bubble Sort

[Bubble Sort](http://en.wikipedia.org/wiki/Bubble_sort) implementation wth O(n^2) complexity loosely based on [JavaScript Algorithms](https://github.com/mgechev/javascript-algorithms).

## Install

```sh
$ npm install --save bubblesort
```

## Usage

```js
var bubblesort = require('bubblesort');

// Ascending order

bubblesort([3,1,4,1,5,9,2,6,5,4]);
// => [1,1,2,3,4,4,5,5,6,9]

bubblesort([9,2,8,6,1,3]);
// => [1,2,3,6,8,9]

bubblesort([5,2,4,6,1,3]);
// => [1,2,3,4,5,6]

// Descending order

bubblesort([5,2,2,6,1,3], 'desc');
// => [6,5,3,2,2,1]

bubblesort([0,0,0,0,0,-1], 'desc');
// => [0,0,0,0,0,-1]
```

## License

MIT © [Addy Osmani](addyosmani.com)


[npm-url]: https://npmjs.org/package/bubblesort
[npm-image]: https://badge.fury.io/js/bubblesort.svg
[travis-url]: https://travis-ci.org/addyosmani/bubblesort
[travis-image]: https://travis-ci.org/addyosmani/bubblesort.svg?branch=master
[daviddm-url]: https://david-dm.org/addyosmani/bubblesort.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/addyosmani/bubblesort
