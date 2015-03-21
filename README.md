#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> Bubble Sort

[Bubble Sort](http://en.wikipedia.org/wiki/Bubble_sort) implementation wth O(n^2) complexity based on [JavaScript Algorithms](https://github.com/mgechev/javascript-algorithms).

> Bubble sort is a simple sorting algorithm that repeatedly steps through the list to be sorted, 
compares each pair of adjacent items and swaps them if they are in the wrong order. 

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

function comparator(a, b) { return b - a; }

bubblesort([5,2,2,6,1,3], comparator);
// => [6,5,3,2,2,1]

bubblesort([0,0,0,0,0,-1], comparator);
// => [0,0,0,0,0,-1]

// Ascending sort arrays of objects

var people = [
  {name: 'Sindre', age: 30, place: 2},
  {name: 'Passy', age: 25, place: 1},
  {name: 'Stephen', age: 40, place: 4},
  {name: 'Matt', age: 35, place: 3}
];

function comparePeople(a, b) { return a.age - b.age };

bubblesort(people, comparePeople);
/*
=> [
  {"name": 'Passy', "age": 25, "place": 1},
  {"name": 'Sindre', "age": 30, "place": 2},
  {"name": 'Matt', "age": 35, "place": 3},
  {"name": 'Stephen', "age": 40, "place": 4}
]
*/
```

## License

MIT © [Addy Osmani](http://addyosmani.com)


[npm-url]: https://npmjs.org/package/bubblesort
[npm-image]: https://badge.fury.io/js/bubblesort.svg
[travis-url]: https://travis-ci.org/addyosmani/bubblesort
[travis-image]: https://travis-ci.org/addyosmani/bubblesort.svg?branch=master
[daviddm-url]: https://david-dm.org/addyosmani/bubblesort
[daviddm-image]: https://david-dm.org/addyosmani/bubblesort.svg?theme=shields.io
