'use strict';
const textInput = document.querySelector(".input");
const textParrafo = document.querySelector(".parrafo");

function insertText (event){
    let addText = event.currentTarget.value;
    textParrafo.innerHTML = addText;
    //addText SE PODRÍA PONER DESPUES DEL IGUAL DE INNERHTML Y NO HARIA FALTA LA VARIABLE
}

textInput.addEventListener('keyup', insertText);


