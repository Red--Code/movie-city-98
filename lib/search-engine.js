var movie = new Array();
var bot = require('../lib/movie-bot.js');
var i = 0;
var j = 0;
var z = 1;
var l = 0;
var k = 0;
var res = new Array();
var lblresorted = new Array();
var lbl = new Array;
var lblset = new Array;
movie[0] = require('../lib/db/0 db.js')
while (1){
		movie[z] = require('../lib/db/' + z + ' db.js');
				if (movie[z].prop == 'lastone'){
					console.log(z + ' files loaded');
				break;
				}
		z++;
}
function engine () {        
	module.exports.movie = movie; 
   setTimeout(function () { 
   	var qauntlbl = bot.qu.split('');

	lbl = movie[k].name.split('');   
	lblset = lbl.slice(0,qauntlbl.length);
	var lblset2 = lblset.toString();
	var lblset3 = qauntlbl.toString();
	if (lblset2 ==  lblset3){
		l = k;
	}
	else{
		l = 0;
	}
	k++;
	   	if (movie[k] == null){
			k = 0;
		}
	res[i] = l;
	i++;
	module.exports.res = res;
engine();	
   }, 100)
   
}
engine();
