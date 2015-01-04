'use strict';

function comparator(a, b) {
  return a - b;
}

/**
 * Bubble Sort with O(n^2) complexity
 * @param {Array} arr
 * @param {Function} comparator
 * @returns {Array} bubble sorted array
 */
module.exports = function (arr, cmp) {
  cmp = cmp || comparator;
  var temp;
  for (var i = 0; i < arr.length; i += 1) {
    for (var j = i; j > 0; j -= 1) {
      if (cmp(arr[j], arr[j - 1]) > 0) {
        temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else if (cmp(arr[j - 1], arr[j]) > 0) {
        console.log('alernative');
      }
    }
  }
  return arr;
};



/*

module.exports = function (arr, order) {
  order = order || 'asc';
  var temp;
  for (var i = 0; i < arr.length; i += 1) {
    for (var j = i; j > 0; j -= 1) {
      if (order === 'asc' ? arr[j] < arr[j - 1] : arr[j - 1] < arr[j]) {
        temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
  return arr;
};

 */
