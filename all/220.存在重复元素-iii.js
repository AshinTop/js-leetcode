/*
 * @lc app=leetcode.cn id=220 lang=javascript
 *
 * [220] 存在重复元素 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
// i != j,
// abs(i - j) <= indexDiff
// abs(nums[i] - nums[j]) <= valueDiff
var containsNearbyAlmostDuplicate = function (nums, indexDiff, valueDiff) {
  if (indexDiff <= 0 || valueDiff < 0 || nums.length < 2) return false
  // 用桶存储数据
  const bucket = new Map()
  // 每bucketSize数值范围的数据存同一个索引
  const bucketSize = valueDiff + 1
  for (let i = 0; i < nums.length; i++) {
    const currentIndex = Math.floor(nums[i] / bucketSize)
    // 如果索引相同，肯定符合 abs(nums[i] - nums[j]) <= valueDiff 的条件
    if (bucket.has(currentIndex)) {
      return true
    }
    // 查找左边的桶
    if (bucket.has(currentIndex - 1) && Math.abs(bucket.get(currentIndex - 1) - nums[i]) <= valueDiff) {
      return true
    }
    // 查找右边的桶
    if (bucket.has(currentIndex + 1) && Math.abs(bucket.get(currentIndex + 1) - nums[i]) <= valueDiff) {
      return true
    }
    // 添加桶
    bucket.set(currentIndex, nums[i])
    // 桶数量超出，删除旧桶
    if (i >= indexDiff) {
      bucket.delete(Math.floor(nums[i - indexDiff] / bucketSize))
    }
  }

  return false
}

// @lc code=end

// console.log(containsNearbyAlmostDuplicate([8, 7, 15, 1, 6, 1, 9, 15], 1, 3))
