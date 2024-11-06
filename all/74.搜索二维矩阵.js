/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const rows = matrix.length
  const cols = matrix[0].length
  if (matrix[0][0] > target || matrix[rows - 1][cols - 1] < target) {
    return false
  }
  const findTarget = (startRow, endRow, startCol, endCol) => {
    if (matrix[startRow][startCol] > target || matrix[endRow][endCol] < target) {
      return false
    }
    if (
      matrix[startRow][startCol] == target ||
      matrix[startRow][endCol] == target ||
      matrix[endRow][startCol] == target ||
      matrix[endRow][endCol] == target
    ) {
      return true
    }
    if (endRow > startRow) {
      const midRow = Math.floor((startRow + endRow) / 2)
      const midLineMin = matrix[midRow][0]
      const mideLineMax = matrix[midRow][cols - 1]
      if (target === midLineMin || target === mideLineMax) {
        return true
      }
      if (target < midLineMin) {
        return findTarget(startRow, midRow - 1, startCol, endCol)
      } else if (target > mideLineMax) {
        return findTarget(midRow + 1, endRow, startCol, endCol)
      } else {
        return findTarget(midRow, midRow, startCol, endCol)
      }
    } else {
      if (startCol + 1 >= endCol) {
        return matrix[startRow][startCol] === target || matrix[startRow][endCol] === target
      }
      const midCol = Math.floor((startCol + endCol) / 2)
      const mideValue = matrix[startRow][midCol]
      if (target == mideValue) {
        return true
      } else if (target > mideValue) {
        return findTarget(startRow, endRow, midCol, endCol)
      } else {
        return findTarget(startRow, endRow, startCol, midCol)
      }
    }
  }
  return findTarget(0, rows - 1, 0, cols - 1)
}
// @lc code=end

console.log(
  searchMatrix(
    [
      [-8, -7, -5, -3, -3, -1, 1],
      [2, 2, 2, 3, 3, 5, 7],
      [8, 9, 11, 11, 13, 15, 17],
      [18, 18, 18, 20, 20, 20, 21],
      [23, 24, 26, 26, 26, 27, 27],
      [28, 29, 29, 30, 32, 32, 34],
    ],
    -5
  )
)
