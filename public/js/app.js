//Fa la connessione al server
var socket = io();

//Evento sul client (connect) e funzione da richimaare quando l'avento accade
socket.on('connect', function() {
	//Questo lo vedi nella console delle developer tools
	console.log("Connected to socket.io server");

});


//Ora ascolto gli eventi in arrivo e faccio qualcosa quando li ricevo
socket.on('messaggio', function(messaggio_ricevuto) {
	console.log('Nuovo messaggio ricevuto: ');
	console.log(messaggio_ricevuto.testo);
});