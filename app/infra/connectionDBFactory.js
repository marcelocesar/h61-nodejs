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
    
   /* if (process.env.NODE_ENV == 'production') {
        var url = process.env.CLEARDB_DATABASE_URL;
        var grupos = url.match(/mysql:\/\/(.*):(.*)@(.*)\/(.*)\?/);
        return mysql.createConnection({
            host:grupos[3],
            user:grupos[1],
            password:grupos[2],
            database:grupos[4]
        });
    }*/
}

//Pattern Wrapper
module.exports = function () {
    return createDBConnection;
};