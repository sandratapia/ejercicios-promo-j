'use strict';

const link1 = document.querySelector('.enlace1');
const link2 = document.querySelector('.enlace2');
const link3 = document.querySelector('.enlace3');

function stopDo (event){
    event.preventDefault(link3);
}

link1.addEventListener('click', stopDo);
link2.addEventListener('click', stopDo);
link3.addEventListener('click', stopDo);

