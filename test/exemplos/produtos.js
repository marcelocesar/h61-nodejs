"use strict";
var http = require('http'),
    assert = require('assert');

describe('livros.js with http and assert', function () {
    
    it('#listagem json 1', function (done) {
    
        var config = {
            host: 'localhost',
            port: 3000,
            path: '/produtos',
            headers: {
                'Accept': 'application/json' // or 'text/html'
            }
        };
    
        http.get(config, function (res) {
            assert(res.statusCode, 200);
            assert(res.headers['content-type'], 'application/json; charset=utf-8');
            done();
        });
    });
});