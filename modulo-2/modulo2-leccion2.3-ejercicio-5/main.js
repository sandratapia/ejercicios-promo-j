'use strict';
const box = document.querySelector(".container");
const title = document.querySelector(".title");
const info = document.querySelector(".info");

let method = prompt("Introduce que clase quieres, succes, error o warning").toLowerCase();

if(method==="success"){
    box.classList.add('success');
    title.innerHTML = "CORRECTO";
    info.innerHTML = "Los datos son correctos";
}else if(method==="warning"){
    box.classList.add('warning');
    title.innerHTML = "AVISO";
    info.innerHTML = "Tenga cuidado";
}else if(method==="error"){
    box.classList.add('error');
    title.innerHTML = "ERROR";
    info.innerHTML = "Ha surgido un error";
}else{
    document.write("Algo no ha ido bien, por favor vuelve a intentarlo");
}