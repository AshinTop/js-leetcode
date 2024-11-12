/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const result = []

  // 1. 对数组进行排序，确保相同元素相邻
  nums.sort()

  // 2. 回溯函数
  function backtrack(start, path) {
    result.push([...path]) // 将当前路径（子集）加入结果

    for (let i = start; i < nums.length; i++) {
      // 3. 跳过重复的元素，确保不生成重复的子集
      if (i > start && nums[i] === nums[i - 1]) {
        continue
      }
      path.push(nums[i]) // 包含当前元素
      backtrack(i + 1, path) // 递归，继续选择下一个数字
      path.pop() // 回溯，移除当前元素
    }
  }

  // 从第一个元素开始回溯
  backtrack(0, [])
  return result
}
// @lc code=end
