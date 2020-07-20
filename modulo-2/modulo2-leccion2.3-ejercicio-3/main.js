'use strict';
const number = document.querySelector(".control")
let introduceNumber = Number(prompt("Introduce un numero"));

if (introduceNumber===0) {
    document.write('El número es 0');
} else if (introduceNumber<0) {
    document.write('El número es negativo');
} else if (introduceNumber>=11&&introduceNumber+2<=20) {
    document.write('El número más 2 es mayor que 13 pero menor o igual que 20');
} else if (introduceNumber>20&&introduceNumber<50) {
    document.write('El número es mayor que 20 pero menor que 50');
} else {
    document.write('El número no es 123123125');
}