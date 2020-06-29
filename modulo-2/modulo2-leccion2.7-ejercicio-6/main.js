'use strict';

const buttonSubmit = document.querySelector('.submit-js');
let filmsBooks = [];

function addValue (event){
    event.preventDefault();
    const inputValue = document.querySelector('.input-js').value;
    filmsBooks.push(inputValue);
    console.log('Pelicula añadida');
    for(const movie of filmsBooks){
        console.log(`¡A mí también me encantó ${movie}! Tenemos mucho en común, humana.`);
    }
}

buttonSubmit.addEventListener('click',addValue);