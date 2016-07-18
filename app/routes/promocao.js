"use strict";

function promocaoDeLivro(app) {
    
    app.get('/promocao/new', function (req, res, next) {
        
        var ConnectionDB = app.infra.connectionDBFactory();
        var LivroDAO = new app.infra.LivroDAO(ConnectionDB);
        
        LivroDAO.lista(function (err, result) {
           if(err){
               return next(err);
           }
           res.render('promocao', {errorsValidation: '', livros: result});
        });
        ConnectionDB.end();
    });
    app.post('/promocao', function (req, res, next) {
        
        var promocao = req.body;
        app.get('io').emit('novaPromocao', promocao);
        res.redirect('/promocao/new');
    });
}

module.exports = promocaoDeLivro;