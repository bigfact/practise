/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let arr = []
  for (let i = 0; i < n + 1; i++) {
    if (i == 0) arr.push(0)
    else if (i == 1) arr.push(1)
    else arr.push(arr[i - 1] + arr[i - 2])
  }
  return arr[arr.length - 1]
}

// @lc code=end

var fib2 = function (n) {
  if (n <= 0) return 0
  if (n <= 1) return 1
  return fib2(n - 1) + fib2(n - 2)
}

// console.log(fib(6))
