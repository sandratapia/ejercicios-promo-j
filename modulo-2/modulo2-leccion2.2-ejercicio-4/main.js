'use strict';

let personas = 9;
let cuenta = 128;
let ana= 2;

let cuentaIndividual = (cuenta - ana) / personas;
let cuentaAna = cuentaIndividual + ana;

document.write("Cada comensal debe pagar " + cuentaIndividual + " euros.");
document.write("Ana debe pagar " + cuentaAna);