'use strict';

// robimy zmienna dla ostatniego checkboxa:

var lastCheckbox = document.getElementById('zgoda2');

//console.log(lastCheckbox); // i sprawdzamy, czy na pewno wyloguje nam w konsoli ten ostatni checkbox

//robimy zmienna dla wszystkich checkboxow:

var allCheckboxes = document.querySelectorAll('input[type=checkbox]');

//console.log(allCheckboxes);

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
	var textInputs = document.querySelectorAll('input[type=text]');
	
	
	for (var i=0; i<textInputs.length; i++) {
		if(textInputs[i].value == '') { //jezeli wartosc w input'cie jest pusta, to logujemy tekst, bo to pole jest wymagane do uzupelnienia, zeby moc wyslac forumlarz
			event.preventDefault();
			errorMessage(textInputs[i]); //odnosimy sie do funkcji errorMessage				
	    } else if (textInputs[i].value != '' && textInputs[i].nextElementSibling.tagName == 'SPAN'){ //jezeli moj element nie jest pusty i jest za nim komunikat błędu, to wyrzuć ten komunikat błędu
		
			textInputs[i].nextElementSibling.remove();
		}
	}
	
	if(firstAgreement.checked == false) { //odwolujemy sie do pierwszej zgody, ktora jest wymagana, zeby wyslac formularza
		event.preventDefault();
		
		 errorMessage(firstAgreement);
	
	} else if (firstAgreement.checked == true && firstAgreement.nextElementSibling.tagName == 'SPAN'){
		firstAgreement.nextElementSibling.remove();
	}
}

function errorMessage(element) { //robimy glowna funkcje z tworzeniem napisu blokujacego i odnosimy sie potem do tej funkcji dla elementow typu input=text
	if (element.nextElementSibling.tagName != 'SPAN') {
				var message = document.createElement('span'); //tworzymy tekst 'to musi byc zaznaczone', ktory sie wyswietli, jezeli ktos nie zaznaczy pierwszego checkboxa i bedzie chcial wyslac pierwszy formularz
				message.innerText = 'To pole jest wymagane';
				message.style.color = 'red';
				element.parentNode.insertBefore(message, element.nextSibling);
		} 
}

