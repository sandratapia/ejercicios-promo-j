'use strict';

const body = document.querySelector('.body');
let botones = document.querySelectorAll('button');

function addBackground(){
    body.classList.toggle('hidden');
}

for(let boton of botones){
    boton.addEventListener('click', addBackground);
}