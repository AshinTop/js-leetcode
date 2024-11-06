/*
 * @lc app=leetcode.cn id=89 lang=javascript
 *
 * [89] 格雷编码
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  const result = []
  const count = 1 << n
  for (let i = 0; i < count; i++) {
    const gray = i ^ (i >> 1)
    result.push(gray)
  }
  return result
}
// @lc code=end
