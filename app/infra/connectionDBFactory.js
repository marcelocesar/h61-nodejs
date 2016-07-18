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
}

//Pattern Wrapper
module.exports = function () {
    return createDBConnection;
};