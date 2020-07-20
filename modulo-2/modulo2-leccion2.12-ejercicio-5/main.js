'use strict';

const links = document.querySelectorAll('.enlace');


function stopDo(event){
    event.currentTarget.preventDefault(links);
}

for (link of links){
    link.addEventListener('click', stopDo);
}

