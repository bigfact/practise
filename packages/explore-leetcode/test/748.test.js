import { shortestCompletingWord } from '../src/748'

const cases = [
  {
    licensePlate: 'GrC8950',
    words: ['measure', 'other', 'every', 'base', 'according', 'level', 'meeting', 'none', 'marriage', 'rest'],
    result: 'according'
  },
  {
    licensePlate: '1s3 PSt',
    words: ['step', 'steps', 'stripe', 'stepple'],
    result: 'steps'
  }
]

cases.forEach(({ licensePlate, words, result }) => {
  test(`748. 最短完整词 licensePlate ${licensePlate} allowed ${JSON.stringify(words)}`, () => {
    expect(shortestCompletingWord(licensePlate, words)).toBe(result)
  })
})
