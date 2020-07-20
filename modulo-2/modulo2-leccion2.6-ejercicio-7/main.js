'use strict';

const userInfo = {};
const job = 'developer';

userInfo.firstName = 'Sandra';
userInfo.lastName = 'Tapia';
userInfo.age = 26;
userInfo.job = job;

console.log(userInfo.firstName);
console.log(userInfo.lastName);
console.log(userInfo.age);
console.log(userInfo.job);


userInfo.firstName = 'Sara';
userInfo.addAge = function (){
    return this.age + 1;
}

console.log(userInfo.addAge());
