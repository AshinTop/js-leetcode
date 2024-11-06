/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length < 2) {
    return nums[0]
  }
  const res = []
  for (let i = 0; i < nums.length; i++) {
    //到达i之前有多少钱了
    const before1 = res[i - 2] || 0
    const before2 = res[i - 3] || 0
    const money = Math.max(before1, before2)
    //偷了这一户累积了多少钱
    const count = nums[i] + money
    res.push(count)
  }
  return Math.max(...res)
}
// @lc code=end
console.log(rob([2, 7, 9, 3, 1]))
