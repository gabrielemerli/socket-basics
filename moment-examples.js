var moment = require('moment');


//Current time, la variabile now ora è un oggetto moment
var now = moment();

//http://momentjs.com/docs/#/displaying/format/
console.log(now.format());
console.log(now.format('YYYY-MM-DD, HH:mm:ss'));
console.log(now.format('DD/MM/YYYY, HH:mm:ss'));


//Add subtract
//http://momentjs.com/docs/#/manipulating/add/
now.subtract(1,'years');
console.log(now.format('YYYY-MM-DD, HH:mm:ss'));
now.add(2,'weeks');
console.log(now.format('YYYY-MM-DD, HH:mm:ss'));

//Data diversa da ora
var dataGab = moment('1979-12-10,05:16:00', 'YYYY-MM-DD, HH:mm:ss');
var nowGab = moment();
var etaGab = nowGab.year() - dataGab.year();
console.log(etaGab);

//Così non va
//var mesiGab = nowGab.subtract(dataGab);
//console.log(mesiGab.month())

///////////////////////Unixtime UNIX TIMESTAMPS - EPOCH/////////////////////////////////
//http://www.epochconverter.com/
//millisecondi (in javascript si usano i millesecondi)
console.log(now.valueOf()); 
console.log(now.format('x')) //Stringa
//Secondi
console.log(now.format('X')); //Stringa
console.log(now.unix());
//NOTA
//QUANDO USI FORMAT moments ritorna una stringa, quindi niente operazioni


var timestamp = 1232312312824;
//Per il momento attuale
//var timestamp = moment().valueOf();
//Al posto di chiamare la funzione moment, accediamo al metodo utc dell'oggetto moment
var dataOra = moment.utc(timestamp);
console.log(dataOra.format());
console.log(dataOra.format('YYYY-MM-DD HH:mm:ss'));
//Solo l'ora
console.log(dataOra.format('HH:mm:ss'));
//Ora trasformo l'utc in local
console.log(dataOra.local().format('YYYY-MM-DD HH:mm:ss'));
//Solo l'ora
console.log(dataOra.local().format('HH:mm:ss'));