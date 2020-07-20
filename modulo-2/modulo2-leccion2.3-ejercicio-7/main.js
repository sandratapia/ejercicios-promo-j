'use strict';

let introduceYear = Number(prompt("Introduce un año."));
const currentYear = 2020;
if(introduceYear%4===0){
    document.write("Este año es bisiesto");
}else if(introduceYear%4===1){
    document.write(`El siguiente año bisiesto será el ${introduceYear + 3}`);
}else if(introduceYear%4===2){
    document.write(`El siguiente año bisiesto será el ${introduceYear + 2}`);
}else if(introduceYear%4===3){
    document.write(`El siguiente año bisiesto será el ${introduceYear + 1}`);
}else{
    document.write(`No te entiendo, por favor, intentalo de nuevo.`)
}