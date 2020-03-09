/**
 * 748. 最短完整词
 * @see {@link https://leetcode-cn.com/problems/shortest-completing-word/}
 * @description
 * 1、从 licensePlate 找出字母，并构造以字母为键，出现次数为值的键值对 a
 * 2、遍历 words 为满足条件的词构造字母次数键值对 b（条件，暂无已匹配项，或者当前词长度小于已匹配项长度且大于等于最小词长度）
 * 3、比较 a 和 b，若 a 中每个字母的次数都小于等于 b 中的对应字母次数，则此次匹配成功
 */

/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
export function shortestCompletingWord(licensePlate, words) {
  let licensePlateArr = licensePlate.split('')
  let licensePlateObj = {}
  let wordMinLen = 0
  licensePlateArr.forEach(el => {
    el = el.toLowerCase()
    let paired = /[a-z]/.test(el)
    if (paired) {
      licensePlateObj[el] = licensePlateObj[el] || 0
      licensePlateObj[el]++
      wordMinLen++
    }
  })

  let result = ''
  words.forEach(el => {
    if (!result || (el.length < result.length && el.length >= wordMinLen)) {
      let elArr = el.split('')
      let elObj = {}
      elArr.forEach(key => {
        // key = key.toLowerCase()
        elObj[key] = elObj[key] || 0
        elObj[key]++
      })
      for (let key in licensePlateObj) {
        if (!elObj[key] || licensePlateObj[key] > elObj[key]) return
      }
      result = el
    }
  })

  return result
}
