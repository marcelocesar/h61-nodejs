"use strict";

var powerLevel = function(level) {
  return level > 9000 ? "it's over 9000!!!" : level;
};
module.exports = powerLevel;

//require('./powerlevel')(9050);

//var powerLevel = require('./powerlevel')
// powerLevel(9050);
