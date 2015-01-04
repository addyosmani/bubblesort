/*global describe, it */
'use strict';
var assert = require('assert');
var bubblesort = require('../');
var people = [
  {name: 'Sindre', age: 30, place: 2},
  {name: 'Passy', age: 25, place: 1},
  {name: 'Stephen', age: 40, place: 4},
  {name: 'Matt', age: 35, place: 3}
];

function makeRandomArray() {

  var precision = 2;
  var multiplier = 100;
  var size = 100;
  var result = [];

  for (var i = size; i > 0; i -= 1) {
    result.push(parseFloat((Math.random() * multiplier).toFixed(precision)));
  }
  return result;
}

function desc(a, b) {
  return b - a;
}

function objComparator(a, b) {
  return a.age - b.age;
}

describe('bubblesort node module', function () {

  it('should work with empty arrays', function () {
    assert.deepEqual(bubblesort([]), []);
  });

  it('should work with (ascending) sorted arrays', function () {
    assert.deepEqual(bubblesort([3, 1, 4, 1, 5, 9, 2, 6, 5, 4]), [1, 1, 2, 3, 4, 4, 5, 5, 6, 9]);
    assert.deepEqual(bubblesort([9, 2, 8, 6, 1, 3]), [1, 2, 3, 6, 8, 9]);
    assert.deepEqual(bubblesort([5, 2, 2, 6, 1, 3]), [1, 2, 2, 3, 5, 6]);
    assert.deepEqual(bubblesort([5, 2, 4, 6, 1, 3]), [1, 2, 3, 4, 5, 6]);
    assert.deepEqual(bubblesort([0, 0, 0, 0, 0, -1]), [-1, 0, 0, 0, 0, 0]);
  });

  it('should work with (descending) sorted arrays', function () {
    assert.deepEqual(bubblesort([4, 2, 2, 6, 1, 3], desc), [6, 4, 3, 2, 2, 1]);
    assert.deepEqual(bubblesort([0, 0, 0, 0, 0, 1], desc), [1, 0, 0, 0, 0, 0]);
    assert.deepEqual(bubblesort([0, 0, 0, 0, 0, -1], desc), [0, 0, 0, 0, 0, -1]);
  });

  it('should work with (ascending) arrays of objects', function () {
    assert.deepEqual(bubblesort(people, objComparator), [
        {"name": 'Passy', "age": 25, "place": 1},
        {"name": 'Sindre', "age": 30, "place": 2},
        {"name": 'Matt', "age": 35, "place": 3},
        {"name": 'Stephen', "age": 40, "place": 4}]
    );
  });

  it('should work with random non-sorted arrays', function () {
    var array = makeRandomArray({
      precision: 0
    });
    bubblesort(array);
    for (var i = 0; i < array.length - 1; i += 1) {
      assert((array[i] <= array[i + 1]) === true);
    }
  });
});
