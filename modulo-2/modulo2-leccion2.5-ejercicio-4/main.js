'use strict';
const doScroll = document.querySelector(".scroll");

window.onscroll = function (e){
    if(window.scrollY > 250){
        doScroll.classList.add("blue");
        doScroll.classList.remove("yellow");
    }else{
        doScroll.classList.remove("blue");
        doScroll.classList.add("yellow");
    }
    
}

