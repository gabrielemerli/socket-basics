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




//Gestione del form
//Handles submitting of new message
//Lancio jQuery con un selector, 'input' ,'title' etc, posso anche selezionare per id mettendo davanti #
var $form = jQuery('#message-form');

//Si mette in ascolto per degli eventi, in questo caso submit
$form.on('submit', function (event){

	//Questo evento viene usato sui form quando non vuoi fare il submit nel vecchio modo, ovvero facendo il refersh dell'intera pagina
	//Quindi gestisco il submit per conto mio, per dire quando uso i socket o richieste ajax 
	event.preventDefault();

	var $message = $form.find('input[name=message]');


	socket.emit('messaggio', {
		//Find cerca all'interno di un elemento, per attributo servon le parentesi quadre
		//.val() -> pull the value out and return it as a string
		testo: $message.val()
	});


	$message.val('');


});

