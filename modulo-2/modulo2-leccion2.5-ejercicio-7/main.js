'use strict';
const buttonSend = document.querySelector(".btn");

function changeColor (){
    buttonSend.classList.toggle('bkg-color');
}

buttonSend.addEventListener('click', changeColor);


