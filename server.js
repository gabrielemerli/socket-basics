var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();

//Start a news server e usa questa express app
var http = require('http').Server(app);

var io = require('socket.io')(http);

//Voglio esporre una cartella
app.use(express.static(__dirname+'/public'));

//On -> Ascolta eventi ('event_name')
io.on('connection', function(){
	console.log('User connected via socket.io');
})

http.listen(PORT, function() {
	console.log('Server started!');
})