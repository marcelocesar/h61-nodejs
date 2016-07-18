"use strict";

//literal objects
var User = {
  name: null,
  email: null,
  create: function (name, email) {
    var instance = Object.create(this);
    instance.name = name;
    instance.email = email;
    return instance;
  },
  toString: function () {
    console.log('this.name: ' + this.name + '\n' + 'this.email: ' + this.email);
  }
};

module.exports = User;

//var User = require('./user2');
//var p1 = User.create('Marcelo', 'marcelo@gmail.com');
//p1.toString();