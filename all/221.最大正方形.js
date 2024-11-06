/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  // 思路
  // 1. 从一个点开始，向右下延伸，直到失败，得到最大的数值。
  // 2. 找到下一个点，不在上一个的范围内，同样向右边或者向下延伸，直到失败，得到最大值

  const rows = matrix.length
  const cols = matrix[0].length

  const findMaxSquare = function (startRow, startCol, step = 0) {
    if (matrix[startRow][startCol] === '0' || startRow + step >= rows || startCol + step >= cols) {
      return step
    }
    if (step > 0) {
      if (matrix[startRow + step][startCol + step] === '0') {
        return step
      }
      for (let i = 0; i < step; i++) {
        if (matrix[i + startRow][startCol + step] === '0') {
          return step
        }
        if (matrix[startRow + step][i + startCol] === '0') {
          return step
        }
      }
    }
    return findMaxSquare(startRow, startCol, step + 1)
  }
  let max = 0,
    preMax = 0

  for (let i = 0; i < rows; i++)
    for (let j = 0; j < cols; j++) {
      if (rows - i <= max || cols - j <= max) {
        continue
      }
      preMax = findMaxSquare(i, j, preMax - 1)
      max = Math.max(preMax, max)
    }
  return max * max
}
// @lc code=end

console.log(
  maximalSquare([
    ['1', '1', '0', '1'],
    ['1', '1', '0', '1'],
    ['1', '1', '1', '1'],
  ])
)
