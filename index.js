'use strict';

function comparator(a, b) {
  return a - b;
}

/**
 * Bubble Sort with O(n^2) complexity
 * @param {Array} input array
 * @param {Function} comparator
 * @returns {Array} bubble sorted array
 */
module.exports = function (arr, cmp) {
  cmp = cmp || comparator;
  var temp;
  var numSwaps = 0;
  for (var i = 0, l = arr.length - 1; i < l; i++) {
    for (var j = 0; j < l - i; j++) {
      if (cmp(arr[j+1], arr[j]) < 0) {
        numSwaps++;
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if(!numSwaps) {
      break;
    }
  }
  return arr;
};
