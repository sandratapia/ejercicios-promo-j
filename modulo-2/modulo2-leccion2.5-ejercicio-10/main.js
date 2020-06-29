'use strict';

const btnStart = document.querySelector('.start');
const listFilms = document.querySelector('.films');
const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';  

let inceptionEl;
let butterflyEl;
let sunshineEl;
let velvetEl;
let splitEl;

function insertFilm(){
    listFilms.innerHTML = `<li class="inception-f">${inception}</li> <li class="butterfly-f">${theButterFlyEffect}</li> <li class="sunshine-f">${eternalSunshineOfTheSM}</li> <li class="velvet-f">${blueVelvet}</li> <li class="split-f">${split}</li>`;

    let film = document.querySelector('li');
    inceptionEl = document.querySelector(".inception-f");
    butterflyEl = document.querySelector(".butterfly-f");
    sunshineEl = document.querySelector(".sunshine-f");
    velvetEl = document.querySelector(".velvet-f");
    splitEl = document.querySelector(".split-f");
    
    function movieClickHandler(event) {
        console.log(event.currentTarget.innerHTML); 
    }
    inceptionEl.addEventListener('click', movieClickHandler);
    butterflyEl.addEventListener('click', movieClickHandler);
    sunshineEl.addEventListener('click', movieClickHandler);
    velvetEl.addEventListener('click', movieClickHandler);
    splitEl.addEventListener('click', movieClickHandler);
}

btnStart.addEventListener('click', insertFilm);



