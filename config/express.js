'use strict';

var express = require('express'),
    load = require('express-load'),
    bodyParser = require('body-parser'),
    expressValidator = require('express-validator');

function expressConfig() {
    var app = express();
    
    app.use(express.static('./app/public'));
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    app.set('host', process.env.HEROKU_HOST || 'localhost');
    app.set('port', process.env.PORT || 3000);
    
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(expressValidator());
    
    //carrega as rotas automaticamente
    load('routes', {cwd: 'app'}).then('infra').into(app);
    
    //middleware
    app.use(function (req, res, next) {
        res.status(400).render('errors/404');
    });
    
    app.use(function (error, req, res, next) {
        if(process.env.NODE_ENV === 'production'){
            res.status(500).render('errors/500');
            return;
        }
        next(error);
    });
    
    return app;
}

module.exports = expressConfig;