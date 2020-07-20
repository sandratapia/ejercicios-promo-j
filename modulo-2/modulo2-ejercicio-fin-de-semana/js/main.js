'use strict';

//SELECTORS...
const userName = document.querySelector('.js-user-name');
const password = document.querySelector('.js-user-password');
const buttonSend = document.querySelector('.js-login-button');
const textHidden = document.querySelector('.error-wrapper');

//Number of user attemps
let attemps = 0;

//Object saved in BBDD with user information to compare with my form
const userInfo = {
	name: 'front23',
	password: 'bicicleta'
};

//FUNCTIONS
function loginWeb (){
	if (userName.value === userInfo.name && password.value === userInfo.password){
		alert("Estas detro");
	}else{
		textHidden.classList.toggle('hidden');
		attemps +=1;
	}

	if (attemps > 3){
		alert("Estás bloqueado");
	}
}

//LISTENERS
buttonSend.addEventListener('click', loginWeb);