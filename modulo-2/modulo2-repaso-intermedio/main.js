'use strict';

const maxNumber = 100;
const body = document.querySelector('.body');
const iconInner = document.querySelector('.icon-selected');
const btnUpdate = document.querySelector('.button');
const selectIcon = document.querySelector('.selector');

function getRandomNumber(maxNumber) {
    return Math.ceil(Math.random() * maxNumber);
}

function changeAnimo(event){
    const randomNumber = getRandomNumber(maxNumber);
    console.log(randomNumber);
    if(randomNumber%2===0){
        body.classList.add('number-par');
        body.classList.remove('number-impar');
    }else{
        body.classList.remove('number-par');
        body.classList.add('number-impar');
    }
    iconInner.innerHTML = selectIcon.value;
    event.preventDefault(btnUpdate);
}

btnUpdate.addEventListener('click', changeAnimo);
