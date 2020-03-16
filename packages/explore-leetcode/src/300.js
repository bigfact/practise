/**
 * 300. Longest Increasing Subsequence
 * @see {@link https://leetcode-cn.com/problems/longest-increasing-subsequence/}
 * @description
 * 动态规划
 * 1、定义数组 arr 用于记录状态，状态 arr[i] 定义为 0 ~ i 之间最长单调递增子序列的长度
 * 2、如果存在 nums[i] > nums[j] (0 <= j < i)，那么 arr[i] 应该等于所有满足条件的 arr[j] 的最大值 + 1，否则 arr[i] = 1
 * 2.2、举个例子：
 *   nums = [1, 5, 6, 2, 9, 1],
 *   arr[0] = 1,              num = 1, max = 1
 *   arr[1] = arr[0] + 1 = 2, num = 5, max = 2
 *   arr[2] = arr[1] + 1 = 3, num = 6, max = 3
 *   arr[3] = arr[0] + 1 = 2, num = 2, max = 3
 *   arr[4] = arr[2] + 1 = 4, num = 9, max = 4
 *   arr[5] = 1               num = 1, max = 4
 * 3、最后返回 arr 中最大的子序列长度
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
export function lengthOfLIS(nums) {
  let res = nums.length <= 0 ? 0 : 1
  let arr = [1]
  for (let i = 1; i < nums.length; i++) {
    let len = 0
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j] && arr[j] > len) {
        len = arr[j]
      }
    }
    arr.push(++len)
    if (len > res) {
      res = len
    }
  }
  return res
}
