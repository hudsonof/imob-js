var http = require('http');
var app = require('./config/express');
require('./config/database')('localhost:27017/imob-js');

http.createServer(app).listen(4775, function() {
    console.log('Servidor iniciado!');
});