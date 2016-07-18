'use strict';

console.log("Avaliando o exemplo.js");

var invisivel = function () {
  console.log("invisivel");
};

exports.mensagem = "Oi";

exports.falar = function () {
  console.log(exports.mensagem);
};