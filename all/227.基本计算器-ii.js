/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const stack = []
  let currentNumStr = '',
    operation = '+'
  s = s.trim()
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (/\d/.test(char)) {
      currentNumStr = currentNumStr + char
    }
    const clist = ['+', '-', '*', '/']
    if (clist.indexOf(char) > -1 || i === s.length - 1) {
      switch (operation) {
        case '+':
          stack.push(Number(currentNumStr))
          break
        case '-':
          stack.push(-Number(currentNumStr))
          break
        case '*':
          stack.push(stack.pop() * Number(currentNumStr))
          break
        case '/':
          stack.push(Math.trunc(stack.pop() / Number(currentNumStr)))
          break
      }
      currentNumStr = ''
      operation = char
    }
  }
  return stack.reduce((prev, current) => prev + current, 0)
}

// 测试示例
console.log(calculate('3+2*2')) // 输出: 7
console.log(calculate(' 3/2 ')) // 输出: 1
console.log(calculate(' 3+5 / 2 ')) // 输出: 5

// @lc code=end
