"use strict";

var User = function (name, email) {

  var $name = name;
  var $email = email;

  function setName(name) {
    $name = name;
  }

  function getName() {
    return $name;
  }

  function toString() {
    console.log('this.name: '+ $name +'\n'+ 'this.email: '+ $email);
  }

  return {
    setName: setName,
    getName: getName,
    toString: toString
  }
};

console.log(User);
module.exports = User;