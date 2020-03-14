import { maxProfit } from '../src/121'

const cases = [
  {
    input: [7, 1, 5, 3, 6, 4],
    output: 5
  },
  {
    input: [7, 6, 4, 3, 1],
    output: 0
  }
]

cases.forEach(({ input, output }) => {
  test(`121. Best Time to Buy and Sell Stock input ${JSON.stringify(input)} output ${output}`, () => {
    expect(maxProfit(input)).toBe(output)
  })
})
