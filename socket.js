/**
 * Created by Administrator on 2017/8/23.
 */
var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

http.listen(8000, function(){
    console.log('listening on ');
});

io.on('connection', function(socket){
    io.emit("用户加入");
    socket.on('board', function(msg){
        console.log(msg);
        io.emit('board', msg);
    });
});
