'use strict';

function getEl (a){
    return document.querySelector(a);
}

let getNumber = getEl('.number');
let getNumberNumber = Number(getNumber.innerHTML);

function paresONones (a){
    return a%2
}

if(paresONones(getNumberNumber)===0){
    document.write("Es un número par");
}else{
    document.write("Es un número impar");
}