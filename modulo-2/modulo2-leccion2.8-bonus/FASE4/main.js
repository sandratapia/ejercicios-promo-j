'use strict';

const max= 10;
const randomNumber = getRandomNumber(max);

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

console.log(randomNumber);
function writeThis(word, randomNumber){
  for(let i=0;i<randomNumber;i++){
    console.log(word, randomNumber);
  }
}
writeThis('Patata', randomNumber);
writeThis('Aguacate', randomNumber);
writeThis('Pizza', randomNumber);

