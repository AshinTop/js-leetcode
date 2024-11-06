/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 * 满足 nums[i] == nums[j] 且 abs(i - j) <= k
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  if (k < 0) return false

  const set = new Set()

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true
    }
    set.add(nums[i])

    // 维护窗口大小
    if (i >= k) {
      set.delete(nums[i - k])
    }
  }

  return false
}

// @lc code=end

console.log(containsNearbyDuplicate([99, 99], 2))
