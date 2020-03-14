/**
 * 121. Best Time to Buy and Sell Stock
 * @see {@link https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/}
 * @description
 * 从前往后正序两两组合，筛选最大差值
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
export function maxProfit(prices) {
  let max = 0
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let max0 = prices[j] - prices[i]
      if (max0 > max) {
        max = max0
      }
    }
  }
  return max
}
