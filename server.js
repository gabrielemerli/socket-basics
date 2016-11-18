var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();

//Start a news server e usa questa express app
var http = require('http').Server(app);

//Voglio esporre una cartella
app.use(express.static(__dirname+'/public'));

http.listen(PORT, function() {
	console.log('Server started!');
})