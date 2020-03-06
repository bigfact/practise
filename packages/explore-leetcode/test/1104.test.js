import { pathInZigZagTree } from '../src/1104'

const cases = [
  {
    label: 0,
    result: [0]
  },
  {
    label: 1,
    result: [1]
  },
  {
    label: 14,
    result: [1, 3, 4, 14]
  },
  {
    label: 26,
    result: [1, 2, 6, 10, 26]
  }
]

cases.forEach(caseEl => {
  test('二叉树寻路 label ' + caseEl.label, () => {
    expect(pathInZigZagTree(caseEl.label)).toEqual(caseEl.result)
  })
})
