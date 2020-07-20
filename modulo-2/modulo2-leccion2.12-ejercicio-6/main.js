'use strict';

const body = document.querySelector('.body');

function repeatSentece(){
    const newUl = document.createElement('ul');
    body.appendChild(newUl);
    for(let i=0; i<=100;i++){
        const newLi = document.createElement('li');
        const newContent = document.createTextNode('He aprendido bien cómo funcionan los bucles');
        newLi.appendChild(newContent);
        newUl.appendChild(newLi);
    }
}

repeatSentece();

const select = document.querySelector('.select');
function changeColor (event){
    body.classList.remove('white');
    body.classList.remove('red');
    body.classList.remove('green');
    if(select.value === 'blanco'){
        body.classList.add('white');
    }else if(select.value === 'rojo'){
        body.classList.add('red');
    }else if(select.value === 'verde'){
        body.classList.add('green');
    }
}

select.addEventListener('change', changeColor);