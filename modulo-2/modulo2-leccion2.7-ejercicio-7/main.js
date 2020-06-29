'use strict';

const adalabers = [{
    name:'María',
    age: 19,
    job: 'Diseñadora',
},{
    name:'Lucía',
    age: 31,
    job: 'Ingeniera química',
},{
    name:'Susana',
    age: 34,
    job: 'Periodista',
},{
    name:'Rocio',
    age: 25,
    job: 'Actriz',
},{
    name:'Inmaculada',
    age: 21,
    job: 'Diseñadora',
}];

function countAdalabers(adalabers){
    return console.log(adalabers.length);
}
countAdalabers(adalabers);

function averageAge (adalabers){
    let total = 0;
    for(let adalaber of adalabers){
        total += adalaber.age;
    }
    return console.log(total/adalabers.length);
}
averageAge(adalabers);

function theYoungest(adalabers){
    adalabers.sort((a,b) => {return a.age - b.age});
    return console.log(adalabers[0].name);
}
theYoungest(adalabers);

function countDesigners(adalabers){
    let diseñadoras=0;
    for(let adalaber of adalabers){
        if(adalaber.job === 'Diseñadora'){
            diseñadoras +=1;
        }
    }
    return console.log(diseñadoras);
}
countDesigners(adalabers);