'use strict';
const oldText = document.querySelector(".old");
const newText = document.querySelector(".new");

function changeText(){
    newText.innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae neque dicta labore dolorum corrupti fugiat assumenda enim beatae. Ratione reprehenderit culpa architecto distinctio rem veritatis omnis qui laboriosam porro ipsum."
}

oldText.addEventListener('mouseover', changeText);

