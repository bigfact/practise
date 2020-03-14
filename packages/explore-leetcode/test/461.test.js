import { hammingDistance } from '../src/461'

const cases = [
  {
    x: 1,
    y: 4,
    result: 2
  },
  {
    x: 100,
    y: 1000,
    result: 5
  },
  {
    x: 100,
    y: 100,
    result: 0
  }
]

cases.forEach(({ x, y, result }) => {
  test(`461. Hamming Distance x ${x} y ${y}`, () => {
    expect(hammingDistance(x, y)).toEqual(result)
  })
})
