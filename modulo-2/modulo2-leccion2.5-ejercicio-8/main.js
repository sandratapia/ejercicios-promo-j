'use strict';
const buttonSend = document.querySelector(".btn");
const anotherBtn = document.querySelector(".btn-2");

function changeColor (){
    const selectButton = event.currentTarget;
    selectButton.classList.toggle('bkg-color');
}

buttonSend.addEventListener('click', changeColor);
anotherBtn.addEventListener('click', changeColor);


