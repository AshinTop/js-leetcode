/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  if (num < 10) {
    return num
  }
  let curr = num
  let count = 0
  while (curr > 0) {
    count += curr % 10
    curr = parseInt(curr / 10)
  }
  return addDigits(count)
}
// @lc code=end
