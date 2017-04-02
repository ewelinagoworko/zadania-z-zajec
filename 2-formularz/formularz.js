'use strict';

function pobierzImie(event) {
	
	event.preventDefault();
	console.log(document.getElementsByName('fname')[0].value);
	
	console.log(document.getElementsByName('lname')[0].value);
	
}