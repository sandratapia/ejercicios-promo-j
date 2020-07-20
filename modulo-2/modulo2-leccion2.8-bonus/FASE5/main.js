'use strict';

const myWordList =  [
  {
    text: 'Pencil',
    total: 6
  },
  {
    text: 'Thermo',
    total: 2
  },
  {
    text: 'TV',
    total: 8
  },
  {
    text: 'Phone',
    total: 4
  }
];

//NUMERO RANDOM
const max= 10;
const randomNumber = getRandomNumber(max);

function getRandomNumber(maxNumber) {
  return Math.ceil(Math.random() * maxNumber);
}
console.log(randomNumber);

//COGE COMO PARÁMETRO UNA PALABRA Y UN NUMERO Y LO REPITE ESE NUMERO DE VECES
function writeThis(word, number){
  for(let i=0;i<number;i++){
    console.log(word, number);
  }
}

//COGE UN ARRAY LA RECORRE Y DENTRO COGE COMO PARAMETROS EL TEXTO Y EL TOTAL PARA LA FUNCION WRITE THIS
function writeMyArray(array){
  for(let element of array){
    writeThis(element.text, element.total);
  }
}
writeMyArray(myWordList);
