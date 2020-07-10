'use strict';

let counter = 0;
const textoOculto = document.querySelector('.mensaje');


const countSeconds = () => {
    counter++;
    if (counter === 15) {
      textoOculto.classList.remove('hidden')
    }
  }

setInterval(countSeconds, 1000);