//Fa la connessione al server
var socket = io();

//Evento sul client (connect) e funzione da richimaare quando l'avento accade
socket.on('connect', function() {
	//Questo lo vedi nella console delle developer tools
	console.log("Connected to socket.io server");
});