"use strict";

var http = require('http');

var config = {
  host: 'localhost',
  port: 3000,
  path: '/produtos',
  headers: {
    'Accept': 'application/json' // or 'text/html'
  }
};

http.get(config, function (res) {
  console.log('Status code: ' + res.statusCode);
  res.on('data', function (body) {
    console.log('body: ' + body);
  });
});