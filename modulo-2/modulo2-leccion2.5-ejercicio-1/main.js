'use strict';
const textClass = document.querySelector(".text");
const buttonClass = document.querySelector(".send");

function changeText(){
    textClass.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!"
}

buttonClass.addEventListener('click', changeText);

