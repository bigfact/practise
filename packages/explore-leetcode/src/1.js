/**
 * 1、两数之和
 * @see {@link https://leetcode-cn.com/problems/two-sum}
 */

export function findNumInArrByTarget(nums, target) {
  if (nums instanceof Array && nums.length >= 2 && typeof target === 'number') {
    for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) return [i, j]
      }
    }
  }
  return -1
}
