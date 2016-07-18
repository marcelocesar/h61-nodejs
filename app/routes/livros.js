'use strict';

module.exports = function (app) {
    
    app.get('/livros', function (req, res, next) {
        
        var connectionDB = app.infra.connectionDBFactory();
        var LivroDAO = new app.infra.LivroDAO(connectionDB);
        LivroDAO.lista(function (err, result) {
            if (err) {
                return next(err);
            }
            res.format({
                html: function () {
                    res.render('livros', {livros: result}); ///return text/html
                },
                json: function () {
                    res.json(result); //return application/json
                }
            });
            
        });
        connectionDB.end();
    });
    
    app.get('/livros/new', function (req, res) {
        res.render('livros-new', {errorsValidation: '', livro: ''});
    });
    
    app.post('/livros', function (req, res, next) {
        
        var livro = req.body;
        
        req.assert('title', 'Campo obrigatorio').notEmpty();
        req.assert('price', 'valor inválido').isFloat();
        var validationErrors = req.validationErrors();
        
        if (validationErrors) {
            res.format({
                html: function () {
                    res.status(400).render('livros-new', {errorsValidation: validationErrors, livro: livro});
                },
                json: function () {
                    res.status(400).json(validationErrors);
                }
            });
            return;
        }
        
        var connectionDB = app.infra.connectionDBFactory();
        var LivroDAO = new app.infra.LivroDAO(connectionDB);
        
        LivroDAO.salva(livro, function (err) {
            if (err) {
                return next(err);
            }
            res.redirect('/livros');
        });
        connectionDB.end();
        
    });
};