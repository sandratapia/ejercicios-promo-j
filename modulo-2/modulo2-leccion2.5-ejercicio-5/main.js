'use strict';
const bodyBackground = document.querySelector(".body");

function changeColor(event){
    console.log(event);
    
    if(event.code === 'KeyR') {
        bodyBackground.classList.add('red');
        bodyBackground.classList.remove('purple');
    }else if(event.code ==='KeyM') {
        bodyBackground.classList.add('purple');
        bodyBackground.classList.remove('red');
    }
}

document.addEventListener('keydown', changeColor);

