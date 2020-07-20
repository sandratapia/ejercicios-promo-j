'use strict';

/*let numbers = [5,15,25,89,41];

let acc = 0;
for(let i=0; i<numbers.length;i++){
    acc+=numbers[i];
}
console.log(acc);

let average = acc/numbers.length;
console.log(average);
*/

let numbers = [5,15,25,89,41];

//A
average(numbers);

//B
numbers[5] = 28;
average(numbers);

//C
function average(numbers){
    let acc = 0;
    for(let i=0; i<numbers.length;i++){
        acc+=numbers[i];
    }    
    let average = acc/numbers.length;
    console.log(average);
}
