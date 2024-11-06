/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  // res * res <= x
  // (res+1) * (res+1) > x
  if (x == 1) {
    return 1
  }
  let href = Math.ceil(x / 2)
  while (href * href >= x) {
    if (href * href === x) {
      return href
    }
    href = Math.ceil(href / 2)
  }
  for (let i = href; i < href * 2; i++) {
    if (i * i <= x && (i + 1) * (i + 1) > x) {
      return i
    }
  }
}
// @lc code=end
console.log(mySqrt(8))
