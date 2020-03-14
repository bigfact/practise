import { bulbSwitch } from '../src/319'

const cases = [
  {
    n: 3,
    result: 1
  },
  {
    n: 16,
    result: 4
  },
  {
    n: 99999,
    result: 316
  }
]

cases.forEach(({ n, result }) => {
  test(`319. Bulb Switcher n ${n}`, () => {
    expect(bulbSwitch(n)).toEqual(result)
  })
})
