var express = require('express');
var app = express();
var server = require('http').Server(app);




//configuracion de servidor con express y la libreria sockect io
//tenemos que pasarle nuestro server a socket io
var io = require('socket.io')(server);

app.use(express.static('client'))
app.get('/hola-mundo', function(req, res) {

    res.status(200).send("hola mundo desde mi home")

})
var messages =[{
    id: 1,
    text: "Bienvendio al Chat con socket IO y NodeJS",
    nickname: "Alfred-Bot"
}]

//conectar con el socket
io.on('connection', function(socket) {
    console.log("alguien nuevo se ha conectado al socket");
    console.log("Cliente con IP: "+socket.handshake.address);

    socket.emit('messages',messages);

    socket.on('add-message', function(data) {
       messages.push(data);

       io.sockets.emit('messages', messages);
    } );

});
server.listen(6677, function() {
    console.log("el servidor esta funcionando correctamente en htttp://localhost:6677");
});