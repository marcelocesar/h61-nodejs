"use strict";

var User = function (name, email) {
  this.name = name;
  this.email = email;
  this.toString = function () {
    console.log('this.name: '+ this.name +'\n'+ 'this.email: '+ this.email);
  };
};

module.exports = User;