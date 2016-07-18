"use strict";

function LivroDAO(connection) {
    this._connection = connection;
}
LivroDAO.prototype.lista = function (callback) {
    this._connection.query('select * from livros', callback);
};

LivroDAO.prototype.salva = function (produto, callback) {
    this._connection.query('insert into livros set ?', produto, callback);
};

LivroDAO.prototype.altera = function (produto, callback) {
    this._connection.query('update from livros values(?) where livros.id = ' + produto.id, produto, callback);
};

LivroDAO.prototype.deleta = function (produto, callback) {
    this._connection.query('delete from livros where livros.id = ' + produto.id, callback);
};

module.exports = function () {
    return LivroDAO;
};