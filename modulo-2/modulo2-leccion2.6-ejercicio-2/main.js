'use strict';
const infoAdalaber = document.querySelector(".information");
const infoAdalaberTwo = document.querySelector(".information2");

const adalaber1 = {};
adalaber1.name = 'Susana';
adalaber1.age = 34;
adalaber1.profesion = 'periodista';
adalaber1.run = running => `${running}`;
adalaber1.runAMarathon = distance => `${distance}`;

console.log(adalaber1.run("Estoy corriendo") + ' una maratón de ' + adalaber1.runAMarathon(50) + ' kilometros.');

infoAdalaber.innerHTML = `La Adalaber ${(adalaber1.name)} tiene ${adalaber1.age} años y es ${adalaber1.profesion}.`;

const adalaber2 = {
    name: 'Rocío',
    age: 25,
    profesion: 'actriz',
}

infoAdalaberTwo.innerHTML = `La Adalaber ${(adalaber2.name)} tiene ${adalaber2.age} años y es ${adalaber2.profesion}.`;
