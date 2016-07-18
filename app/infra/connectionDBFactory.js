"use strict";

var mysql = require('mysql');

function createDBConnection() {
    
    if (!process.env.NODE_ENV){
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'casadocodigo_nodejs'
        });
    }
    
    if (process.env.NODE_ENV === 'test'){
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'casadocodigo_nodejs_test'
        });
    }
    
    if (process.env.NODE_ENV === 'production'){
        return mysql.createConnection({
            host: 'us-cdbr-iron-east-04.cleardb.net',
            user: 'b3c44b8226d131',
            password: 'cec4b433',
            database: 'heroku_25b2a8ffc9280c3'
        });
    }
}

//Pattern Wrapper
module.exports = function () {
    return createDBConnection;
};