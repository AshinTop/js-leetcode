/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length <= 1) {
    return nums.length
  }
  //先从小到大排序
  nums.sort((a, b) => a - b)
  const nums2 = Array.from(new Set(nums))
  //寻找最大连续值
  let maxLen = 1,
    maxRes = 1
  for (let i = 0; i < nums2.length - 1; i++) {
    if (nums2[i] + 1 == nums2[i + 1]) {
      maxLen++
    } else {
      maxRes = Math.max(maxLen, maxRes)
      maxLen = 1
    }
  }
  maxRes = Math.max(maxLen, maxRes)
  return maxRes
}
// @lc code=end
