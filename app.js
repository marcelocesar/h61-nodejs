'use strict';

var app = require('./config/express')();
var http = require('http').Server(app);
var oi = require('socket.io')(http);

app.set('io', oi);

http.listen(app.get('port'), function () {
    console.log('Server running at http://' + app.get('host') + ':' + app.get('port'));
});
