/**
 * 319. Bulb Switcher
 * @see {@link https://leetcode-cn.com/problems/bulb-switcher/}
 */

/**
 * 没头脑，暴力破解，超时，卒，O(n^2)
 * @param {number} n
 * @return {number}
 * @description
 * 1、发现规律，某个数 x 仅在开关轮数 y 是 x 的约数时会被切换，例如: x = 6，在第 1, 2, 3, 6 轮都会被切换一次，总计切换 4 次
 * 2、奇开偶关：当 x 的切换次数为偶数时，n 轮后的最终状态为关闭，当 x 的切换次数为奇数时，n 轮后的最终状态为打开
 * 3、顺序遍历 1 到 n，查找当前数 x 的约数个数，根据“奇开偶关”判断 x 最终状态，并计数
 */
export function bulbSwitch1(n) {
  let result = 0
  for (let i = 1; i <= n; i++) {
    let times = 1
    let limit = parseInt(i / 2)
    for (let j = 1; j <= limit; j++) {
      if (i % j === 0) {
        times += 1
      }
    }
    if (times % 2 === 1) {
      result++
    }
  }
  return result
}

/**
 * 稍微有点头脑，耗时长，勉强通过，O(n)
 * @param {number} n
 * @return {number}
 * @description
 * 1、2、规律同 bulbSwitch1
 * 3、一个数的约数总是成对出现，仅有平方数的约数个数为基数，其他的都是偶数，例如：x = 4，[[1, 4], [2, 2]] => [1, 2, 4]，奇数个约数；x = 6，[[1, 6], [2, 3]] => [1, 2, 3, 6]，偶数个约数
 * 4、顺序遍历 1 到 n，统计平方数的个数，判断 x 的开方是否为整数，是则计数
 */
export function bulbSwitch2(n) {
  let result = 0
  for (let i = 1; i <= n; i++) {
    if (Math.sqrt(i) % 1 === 0) result++
  }
  return result
}

/**
 * 突发奇想，耗时还不错，O(logN)
 * @param {number} n
 * @return {number}
 * @description
 * 1、2、3、规律同 bulbSwitch2
 * 4、顺序遍历 1 到 n，统计平方数的个数，判断 x 的平方是否在 n 范围内，是则计数，否则结束遍历
 */
export function bulbSwitch3(n) {
  let result = 0
  for (let i = 1; i <= n; i++) {
    if (i * i <= n) {
      result++
    } else {
      break
    }
  }
  return result
}

/**
 * 真 🐂🍺，O(1)
 * @param {number} n
 * @return {number}
 * @description
 * 1、2、3、规律同 bulbSwitch2
 * 4、数学证明 1 到 n 之间的平方数个数为 n 的开方
 */
export function bulbSwitch(n) {
  return parseInt(Math.sqrt(n))
}
