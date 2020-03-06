import { diagonalSort } from '../src/1329'

const cases = [
  {
    mat: [
      [3, 3, 1, 1],
      [2, 2, 1, 2],
      [1, 1, 1, 2]
    ],
    result: [
      [1, 1, 1, 1],
      [1, 2, 2, 2],
      [1, 2, 3, 3]
    ]
  }
]

cases.forEach(el => {
  test('将矩阵对角线排序 ' + JSON.stringify(el.mat), () => {
    expect(diagonalSort(el.mat)).toEqual(el.result)
  })
})
