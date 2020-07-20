'use strict';

const input = document.querySelector('.input');
const info = document.querySelector('.info');

function containText (event){
  let addText = event.currentTarget.value;
  info.innerHTML = addText;
  localStorage.setItem('name', addText);
}

input.addEventListener('keyup', containText);