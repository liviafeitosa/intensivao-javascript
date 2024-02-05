const http = require('http');
const express = require('express');
const aplicacao = express();

const servidorHttp = http.createServer(aplicacao);
const io = require('socket.io')(servidorHttp);

aplicacao.use(express.static('public'));

io.addListener('connection', (socket) => {
    console.log('um usuário conectou');
    socket.addListener('nova mensagem', (msg) => {
        io.emit('nova mensagem', msg);
    });
});

servidorHttp.listen(1000);