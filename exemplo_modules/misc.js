"use strict";

console.log('misc.js begin');

var x = 5;
var addX = function (value) {
  return value + x;
};

module.exports.x = x;
module.exports.addX = addX;

console.log('misc.js end');