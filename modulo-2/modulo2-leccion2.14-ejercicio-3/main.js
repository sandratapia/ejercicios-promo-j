'use strict';

let counter = 0;
let unit = 'segundo';


const countSeconds = () => {
    counter++;
    let message;
    const text = document.querySelector('.text');

    if (counter === 1) {
      message = `Ha pasado ${counter} ${unit}`;
    } else if (counter > 59) {
      unit = 'minuto';
      message = `Ha pasado 1 ${unit}`;
    } else if (counter > 1){
        unit = 'segundos';
        message = `Han pasado ${counter} ${unit}`

    }
    text.innerHTML = message;
  }

setInterval(countSeconds, 1000);