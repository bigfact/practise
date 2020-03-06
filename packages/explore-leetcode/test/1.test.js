import { findNumInArrByTarget } from '../src/1'

const cases = [
  {
    nums: [2, 7, 11, 15],
    traget: 9,
    result: [0, 1]
  },
  {
    nums: [-1, -2, -3, -4, -5],
    traget: -8,
    result: [2, 4]
  },
  {
    nums: [1, 2, 3, 4, 5],
    traget: 10,
    result: -1
  },
  {
    nums: 1,
    target: 0,
    result: -1
  }
]

cases.forEach(({ nums, traget, result }) => {
  test(`两数之和 nums ${JSON.stringify(nums)} target ${traget}`, () => {
    expect(findNumInArrByTarget(nums, traget)).toEqual(result)
  })
})
