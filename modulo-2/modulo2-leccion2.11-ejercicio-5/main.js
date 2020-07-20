'use strict';

const inputsColors = document.querySelectorAll('input');
const parrafos = document.querySelector('.parrafos');

function changeColors(event){
  parrafos.classList.remove('colores-rosa');
  parrafos.classList.remove('colores-morado');
  if(event.currentTarget.value === '1'){
    parrafos.classList.add('colores-morado');
    localStorage.setItem('color selected', event.currentTarget.value);
  }else if(event.currentTarget.value === '2'){
    parrafos.classList.add('colores-rosa');
    localStorage.setItem('color selected', event.currentTarget.value);
  }
}

for(const input of inputsColors){
  input.addEventListener('change', changeColors);
}

function uploadTheme(){
  const colorTheme = localStorage.getItem('color selected');
  if(colorTheme === '1'){
    parrafos.classList.add('colores-morado');
  }else{
    parrafos.classList.add('colores-rosa');
  }
}
uploadTheme();