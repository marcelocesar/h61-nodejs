'use strict';

module.exports = function (app) {
    app.get('/', function (req, res, next) {
        
        var connectionDB = app.infra.connectionDBFactory();
        var LivroDAO = new app.infra.LivroDAO(connectionDB);
        LivroDAO.lista(function (err, result) {
            if (err) {
                return next(err);
            }
            res.format({
                html: function () {
                    res.render('index', {livros: result});
                },
                json: function () {
                    res.json(result);
                }
            });
            
        });
        connectionDB.end();
    });
};
