'use strict';

document.getElementsByTagName('button')[0].onclick = ustawTlo;

function ustawTlo() {
	document.getElementById('par1').style.backgroundColor = 'yellow';
	document.getElementById('par2').style.backgroundColor = 'red';
}

console.log(ustawTlo);


//inny sposob rozwiazania zadania:

var par1 = document.getElementById('par1');
var par2 = document.getElementById('par2');
var button = document.getElementsByTagName('button')[0];

button.onclick = ustawTlo;

function ustawTlo() {
	par1.style.backgroundColor = 'yellow';
	par2.style.backgroundColor = 'red';
}

console.log(ustawTlo);