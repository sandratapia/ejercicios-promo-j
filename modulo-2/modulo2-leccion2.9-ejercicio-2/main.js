'use strict';

const numbers = [];

function addNumbers(number){
  for(let i=0;i<100;i++){
    numbers.push(number+=1);
  }
}
addNumbers(Number());
console.log(numbers.reverse());