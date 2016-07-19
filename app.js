'use strict';

var app = require('./config/express')();
var http = require('http').Server(app);
var oi = require('socket.io')(http);

app.set('io', oi);

//var porta = process.env.PORT || 3000;

var server = http.listen(app.get('port'), function () {
    
    var host = server.address().address;
    var port = server.address().port;
    
    console.log('Server running at http://%s:%s', host, port);
});

