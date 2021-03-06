module.exports = [
  {
    input: [[1, 2, 3], [5, 2, 1, 4]],
    expected: [3, 5, 4]
  },
  {
    input: [[1, 2, 5], [2, 3, 5], [3, 4, 5]],
    expected: [1, 4, 5]
  },
  {
    input: [[1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]],
    expected: [1, 4, 5]
  },
  {
    input: [[3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]],
    expected: [7, 4, 6, 2, 3]
  },
];
