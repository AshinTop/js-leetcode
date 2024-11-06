/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const rows = matrix.length
  const cols = matrix[0].length
  const rowsMap = {}
  const colsMap = {}
  for (let i = 0; i < rows; i++)
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        rowsMap[i] = true
        colsMap[j] = true
      }
    }
  for (let i = 0; i < rows; i++)
    for (let j = 0; j < cols; j++) {
      if (rowsMap[i] || colsMap[j]) {
        matrix[i][j] = 0
      }
    }
}
// @lc code=end

setZeroes([
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
])
