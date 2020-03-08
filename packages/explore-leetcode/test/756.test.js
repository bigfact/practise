import { pyramidTransition } from '../src/756'

const cases = [
  {
    bottom: 'BCD',
    allowed: ['BCG', 'CDE', 'GEA', 'FFF'],
    result: true
  },
  {
    bottom: 'AABA',
    allowed: ['AAA', 'AAB', 'ABA', 'ABB', 'BAC'],
    result: false
  },
  {
    bottom: 'CCC',
    allowed: ['CBB', 'ACB', 'ABD', 'CDB', 'BDC', 'CBC', 'DBA', 'DBB', 'CAB', 'BCB', 'BCC', 'BAA', 'CCD', 'BDD', 'DDD', 'CCA', 'CAA', 'CCC', 'CCB'],
    result: true
  },
  {
    bottom: 'BDBBAA',
    allowed: ['ACB', 'ACA', 'AAA', 'ACD', 'BCD', 'BAA', 'BCB', 'BCC', 'BAD', 'BAB', 'BAC', 'CAB', 'CCD', 'CAA', 'CCA', 'CCC', 'CAD', 'DAD', 'DAA', 'DAC', 'DCD', 'DCC', 'DCA', 'DDD', 'BDD', 'ABB', 'ABC', 'ABD', 'BDB', 'BBD', 'BBC', 'BBA', 'ADD', 'ADC', 'ADA', 'DDC', 'DDB', 'DDA', 'CDA', 'CDD', 'CBA', 'CDB', 'CBD', 'DBA', 'DBC', 'DBD', 'BDA'],
    result: true
  }
]

cases.forEach(({ bottom, allowed, result }) => {
  test(`金字塔转换矩阵 bottom ${bottom} allowed ${JSON.stringify(allowed)}`, () => {
    expect(pyramidTransition(bottom, allowed)).toBe(result)
  })
})
