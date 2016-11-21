var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();

//Start a news server e usa questa express app
var http = require('http').Server(app);

var io = require('socket.io')(http);

//Voglio esporre una cartella
app.use(express.static(__dirname+'/public'));

//On -> Ascolta eventi ('event_name')
io.on('connection', function(socket){
	console.log('User connected via socket.io');

	//QUesto per far parlare 2 client tra di loro
	//Devo quindi emettere tutti i messaggi che arrivano al server
	//Mi metto in ascolto per i messaggi e poi
	socket.on('messaggio', function(messaggio){
		//Li loggo sulla console di nodejs (sul server) e poi
		console.log('Messaggio ricevuto: '+messaggio.testo);
		//Li emetto a tutti tranne che quello che l'ha mandato , se avessi voluto
		//mandarli a tutti compreso chi l'ha mandato avrei dovuto scrivere
		//io.emit
		socket.broadcast.emit('messaggio', messaggio);

		//Poi per provare apro 2 browser che puntano qui.
		//Sulla console di uno dei 2 scrivo
		//socket.emit('messaggio', {testo: 'due dita su per il culo'})
		//E mi compare sulla console del server e dell'altro client
	});

	//Mando un messaggio al client
	socket.emit('messaggio', {
		testo: 'Wealcome to the metal age'
	});



});

http.listen(PORT, function() {
	console.log('Server started!');
});