"use strict";

require("core-js/modules/es.function.name");

function ArrowFunc(name) {
  var _this = this;

  this.name = name;

  this.say = function () {
    console.log(_this.name);
  };
}

new ArrowFunc('leon').say();