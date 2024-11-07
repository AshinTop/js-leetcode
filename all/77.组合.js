/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = []

  const gatAllPath = (start, path) => {
    if (path.length === k) {
      result.push([...path])
    }
    for (let i = start; i <= n; i++) {
      path.push(i)
      gatAllPath(i + 1, path)
      path.pop()
    }
  }
  gatAllPath(1, [])
  return result
}
// @lc code=end

console.log(combine(20, 10))
