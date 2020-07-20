'use strict';
const textClass = document.querySelector(".name");
const buttonClass = document.querySelector(".send");

function changeText(){
    console.log ('Hola ' + textClass.value);
}

buttonClass.addEventListener('click', changeText);

