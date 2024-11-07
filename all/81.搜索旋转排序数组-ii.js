/*
 * @lc app=leetcode.cn id=81 lang=javascript
 *
 * [81] 搜索旋转排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  if (nums.length === 1) {
    return nums[0] === target
  }
  //   if (nums[0] < nums[nums.length - 1]) {
  //     return false
  //   }
  if (target === nums[0] || target === nums[nums.length - 1]) {
    return true
  }
  if (target > nums[0]) {
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < nums[i - 1]) {
        return false
      }
      if (nums[i] == target) {
        return true
      }
    }
    return false
  }
  if (target < nums[nums.length - 1]) {
    for (let i = nums.length - 2; i >= 0; i--) {
      if (nums[i] > nums[i + 1]) {
        return false
      }
      if (nums[i] == target) {
        return true
      }
    }
    return false
  }
  return false
}
// @lc code=end

console.log(search([1, 3], 1))
