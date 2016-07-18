"use strict";

var http = require('http');

var config = {
  host: 'localhost',
  port: 3000,
  path: '/produtos',
  method: 'post',
  headers: {
    'Accept': 'application/json', // or 'text/html',
    'Content-type': 'application/json'
  }
};

var client = http.request(config, function (res) {
  console.log('Status code: ' + res.statusCode);
  res.on('data', function (body) {
    console.log('body: ' + body);
  });
});

var livro = {
  title : '',
  description: 'Lorem ispsum dolor',
  price: '999,9'
};

client.write(JSON.stringify(livro));
client.end();