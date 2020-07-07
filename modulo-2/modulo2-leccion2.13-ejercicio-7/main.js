'use strict';

const times = [56, 9, 45, 28, 35];

const averageTimes = times.reduce((acc, time) => (acc + time)/2);
    
console.log(averageTimes);