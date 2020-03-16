import { lengthOfLIS } from '../src/300'

const cases = [
  {
    nums: [10, 9, 2, 5, 3, 4],
    // 1,1,1,2,2,3
    result: 3
  },
  {
    nums: [],
    result: 0
  },
  {
    nums: [0],
    result: 1
  },
  {
    nums: [4, 10, 4, 3, 8, 9],
    // 1,2,1,1,2,3
    result: 3
  },
  {
    nums: [10, 9, 2, 5, 3, 7, 101, 18],
    // 1,1,1,2,2,3,4,4
    result: 4
  }
]

cases.forEach(({ nums, result }) => {
  test(`300. Longest Increasing Subsequence, nums ${JSON.stringify(nums)}`, () => {
    expect(lengthOfLIS(nums)).toBe(result)
  })
})
