'use strict';

// robimy zmienna dla ostatniego checkboxa:

var lastCheckbox = document.getElementById('zgoda2');

console.log(lastCheckbox); // i sprawdzamy, czy na pewno wyloguje nam w konsoli ten ostatni checkbox

//robimy zmienna dla wszystkich checkboxow:

var allCheckboxes = document.querySelectorAll('input[type=checkbox]');

console.log(allCheckboxes);

//definiujemy funkcje zwrotna checkboxState, ktora zmienia stan pozostalych checkboxow:

function checkboxState(state) {
	
	//iteracja po tablicy checkboxow i zmiana ich stanu za wyjatkiem ostatniego i uzywamy petli for, zeby potem, gdy trzeba bedzie dodac kolejna zgode w html, to nie trzeba bedzie juz modyfikowac kodu w javascript, bo on zadziala na wszystkie zgody dodane w html
		
	for (var i=0; i<allCheckboxes.length - 1; i++) {
		
		allCheckboxes[i].checked = state;
		allCheckboxes[i].disabled = state; //blokujemy zgode i zgode1 po zaznaczeniu ostatniej zgody
	}
}


//zmiana stanu ostatniego checkboxa: 

lastCheckbox.onchange = function() {
	
	checkboxState(lastCheckbox.checked); //przekaz mi stan checkboxa
}

//po kliknieciu na submit wyslij - formularz bedzie walidowany
document.getElementById('wyslij').onclick = validateForm;

function validateForm(event) {
	
	var firstAgreement = document.getElementById('zgoda');
	
	if(firstAgreement.checked == false) {
		event.preventDefault();
		
		if (firstAgreement.nextElementSibling.tagName != 'P') {
			var message = document.createElement('p'); //tworzymy tekst 'to musi byc zaznaczone', ktory sie wyswietli, jezeli ktos nie zaznaczy pierwszego checkboxa i bedzie chcial wyslac pierwszy formularz
			message.innerText = 'To pole jest wymagane';
			message.style.color = 'red';
			firstAgreement.parentNode.insertBefore(message, 	firstAgreement.nextSibling);
			
		}
		

	}
	
}

