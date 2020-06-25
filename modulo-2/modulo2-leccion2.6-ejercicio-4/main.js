'use strict';

const pressButton = document.querySelector('.press');

pressButton.addEventListener('click', function logEvent (event){
    console.log('Este es el evento', event);
})

