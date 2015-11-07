var app = require('express')();
var http = require('http').Server(app);
var http_req = require('http');
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendfile('index.html');
});

io.on('connection', function(socket){
    socket.on('preorder added', function(){
        io.emit('update preorders list');
    });
});

http.listen(1488, function(){
    console.log('listening on *:1488');
});