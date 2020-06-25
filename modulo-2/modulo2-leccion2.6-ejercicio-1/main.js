'use strict';
const infoAdalaber = document.querySelector(".information");
const infoAdalaberTwo = document.querySelector(".information2");

const adalaber1 = {
    name: 'Susana',
    age: 34,
    profesion: 'periodista',
}

infoAdalaber.innerHTML = `La Adalaber ${(adalaber1.name)} tiene ${adalaber1.age} años y es ${adalaber1.profesion}.`;

const adalaber2 = {
    name: 'Rocío',
    age: 25,
    profesion: 'actriz',
}

infoAdalaberTwo.innerHTML = `La Adalaber ${(adalaber2.name)} tiene ${adalaber2.age} años y es ${adalaber2.profesion}.`;
