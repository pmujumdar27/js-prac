/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    const getmax = (a, b) => a > b ? a : b;

    return numbers.reduce(getmax, undefined);
}

module.exports = findLargestElement;