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
  for (var i = 0, l = arr.length; i < l; i++) {
    for (var j = i; j > 0; j--) {
      if (cmp(arr[j], arr[j - 1]) < 0) {
        temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
  return arr;
};
