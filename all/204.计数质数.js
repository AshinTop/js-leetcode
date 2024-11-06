/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  if (n < 2) {
    return 0
  }
  const isPrimes = new Array(n).fill(true)
  isPrimes[0] = false
  isPrimes[1] = false
  for (let i = 2; i * i < n; i++) {
    let j = i * i
    while (j < n) {
      isPrimes[j] = false
      j = j + i
    }
  }
  return isPrimes.reduce((prev, val) => prev + (val ? 1 : 0), 0)
}
// @lc code=end
