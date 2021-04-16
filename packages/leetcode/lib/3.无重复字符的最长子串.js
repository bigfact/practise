/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let res = 0
  let tmp = ''
  for (let i = 0; i < s.length; ) {
    let index = tmp.indexOf(s[i])
    if (index < 0) {
      tmp += s[i]
      if (tmp.length > res) res = tmp.length
      i++
    } else {
      tmp = tmp.slice(1, tmp.length)
    }
  }
  return res
}
// @lc code=end

var lengthOfLongestSubstring2 = function (s) {
  let res = 0
  let tmp = ''
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (tmp.indexOf(s[j]) < 0) {
        tmp += s[j]
        if (tmp.length > res) res = tmp.length
      } else {
        tmp = ''
        break
      }
    }
  }
  return res
}

console.log(lengthOfLongestSubstring2('aab')) // 2
console.log(lengthOfLongestSubstring2('dvdf')) // 3
console.log(lengthOfLongestSubstring2('abcabcbb')) // 3
console.log(lengthOfLongestSubstring2('bpfbhmipx')) // 7
