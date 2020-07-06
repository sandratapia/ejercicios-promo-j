'use strict';

const numbers = [1, 2, 3];

function putNumbers(){
  for (let number of numbers){
    const newLi = document.createElement('li');
    const newText = document.createTextNode(`${number}`);
    newLi.appendChild(newText);

    const lista = document.querySelector('.lista');
    lista.appendChild(newLi);
  }
}

putNumbers();