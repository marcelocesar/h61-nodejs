"use strict";
var app = require('../config/express')(),
    request = require('supertest')(app);

describe('produtos2.js with supertest', function () {
    
    beforeEach(function (done) {
        var conn = app.infra.connectionDBFactory();
        conn.query('delete from livros', function (err, result) {
            if (!err){
                done();
            }
        });
    });
     
    it('#Listar produtos via json', function (done) {
        request.get('/produtos')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
    
    it('#Cadastrar produto com dados invalidos', function (done) {
        request.post('/produtos')
        .send({title:'', description: 'new book for nodejs', price: 22.99})
        .expect(400, done);
    });
    
    it('#Cadastrar produto com dados validos', function (done) {
        request.post('/produtos')
        .send({title:'NodeJs', description: 'new book for nodejs', price: 22.99})
        .expect(302, done);
    });

});