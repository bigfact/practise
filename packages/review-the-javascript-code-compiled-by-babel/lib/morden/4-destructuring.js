"use strict";

require("core-js/modules/web.dom-collections.iterator");

const person = {
  name: 'leon',
  age: 10,
  favorites: ['apple', 'orange']
};
const {
  name: name0,
  age: age0,
  favorites: favorites0,
  other
} = person;
const [, favorite1, favorite2] = favorites0;
console.log(name0, age0, favorites0, other, favorite1, favorite2);

function log0(_ref) {
  let {
    name,
    age: age1,
    favorites: [favorite10, favorite11]
  } = _ref;
  console.log(name, age1, favorite10, favorite11);
}

log0(person);

function log1(_ref2) {
  let {
    other: {
      otherProp
    } = {}
  } = _ref2;
  console.log(otherProp);
}

log1(person);
person.other = {
  otherProp: 1
};
log1(person);