import { combinationSum } from '../src/39'

const cases = [
  {
    candidates: [2, 3, 6, 7],
    target: 7,
    result: [[2, 2, 3], [7]]
  }
  // {
  //   candidates: [2, 3, 5],
  //   target: 8,
  //   result: [
  //     [2, 2, 2, 2],
  //     [2, 3, 3],
  //     [3, 5]
  //   ]
  // }
]

cases.forEach(({ candidates, target, result }) => {
  test(`39. Combination Sum ${JSON.stringify(candidates)} target ${target}`, () => {
    expect(combinationSum(candidates, target)).toEqual(result)
  })
})
