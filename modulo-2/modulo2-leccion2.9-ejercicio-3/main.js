'use strict';

const lostNumbers = [4, 8, 15, 16, 23, 42];
const lostNumbersPares = [];
const lostNumbersImpares = [];

function bestLostNumber(number){
  for(let number of lostNumbers){
    if(number%2===0){
      lostNumbersPares.push(number);
    }
    if(number%3===0){
      lostNumbersImpares.push(number);
    }
  }
}
bestLostNumber(Number());
console.log(lostNumbersPares);
console.log(lostNumbersImpares);
const arrayConcatenada = lostNumbersPares.concat(lostNumbersImpares);
console.log(arrayConcatenada);