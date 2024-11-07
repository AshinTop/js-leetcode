/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const length = nums.length
  let pre = undefined,
    secondPre = undefined
  for (let i = 0; i < length; i++) {
    const current = nums.pop()
    if (current != pre || current != secondPre) {
      nums.unshift(current)
    }
    secondPre = pre
    pre = current
  }
  return nums.length
}
// @lc code=end
