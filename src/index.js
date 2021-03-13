
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];

  if (!matrix) {
    return [];
  } else {
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 !== 0) {
        matrix[i].reverse();
      }
    }
    for (let subArr of matrix) {
      for (let elem of subArr) {
        result.push(elem);
      }
    }
    return result;
  }
}
