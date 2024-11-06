/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */

var isHappy = function (n) {
  let resultList = []
  var isHappyFnc = function (num) {
    if (resultList.indexOf(num) > -1) {
      return false
    }
    const numsList = (num + '').split('')
    let count = 0
    numsList.forEach((item) => {
      count += Number(item) * Number(item)
    })
    if (count === 1) {
      return true
    } else {
      resultList.push(num)
    }
    return isHappyFnc(count)
  }
  return isHappyFnc(n)
}
// @lc code=end

console.log(isHappy(23))
