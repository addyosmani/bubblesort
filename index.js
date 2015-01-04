'use strict';

/**
 * Bubble Sort with O(n^2) complexity
 * @param {Array} arr
 * @param {String} order - asc or desc
 * @returns {Array} bubble sorted array
 */
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
