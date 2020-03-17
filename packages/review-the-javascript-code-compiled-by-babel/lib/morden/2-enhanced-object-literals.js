"use strict";

require("core-js/modules/es.regexp.to-string");

const a = 1;
const obj = {
  a,

  toString() {
    return this.a + '-' + super.toString();
  },

  ['prop_' + function () {
    return 'a';
  }()]: a
};
console.log(a);
console.log(obj);
console.log(obj.toString());