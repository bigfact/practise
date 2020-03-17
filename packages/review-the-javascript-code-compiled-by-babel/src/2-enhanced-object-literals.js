const a = 1

const obj = {
  a,
  toString() {
    return this.a + '-' + super.toString()
  },
  ['prop_' + (() => 'a')()]: a
}

console.log(a)
console.log(obj)
console.log(obj.toString())
