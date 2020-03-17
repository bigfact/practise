"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var person = {
  name: 'leon',
  age: 10,
  favorites: ['apple', 'orange']
};
var name0 = person.name,
    age0 = person.age,
    favorites0 = person.favorites,
    other = person.other;

var _favorites = _slicedToArray(favorites0, 3),
    favorite1 = _favorites[1],
    favorite2 = _favorites[2];

console.log(name0, age0, favorites0, other, favorite1, favorite2);

function log0(_ref) {
  var name = _ref.name,
      age1 = _ref.age,
      _ref$favorites = _slicedToArray(_ref.favorites, 2),
      favorite10 = _ref$favorites[0],
      favorite11 = _ref$favorites[1];

  console.log(name, age1, favorite10, favorite11);
}

log0(person);

function log1(_ref2) {
  var _ref2$other = _ref2.other;
  _ref2$other = _ref2$other === void 0 ? {} : _ref2$other;
  var otherProp = _ref2$other.otherProp;
  console.log(otherProp);
}

log1(person);
person.other = {
  otherProp: 1
};
log1(person);