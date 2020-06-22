'use strict';

const añosVividos = document.querySelector(".años");
let añosVividosNumber = Number(añosVividos.innerHTML);
let horasDia = 24;
let diasAño = 365;
let horasAño= (diasAño*horasDia);
let horasVividas = (añosVividosNumber*horasAño);

document.write("Sandra ha vivido " + horasVividas + " horas.");