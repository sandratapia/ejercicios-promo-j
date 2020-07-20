'use strict';

const moviesLove = ['Up', 'Star Wars', 'Malditos Bastardos'];


function workWithMovies (){
    moviesLove[3] = 'Titanic';
    console.log(moviesLove);

    moviesLove[0] = 'Atrápame si puedes';
    console.log(moviesLove);

    moviesLove[1] = 'Alvin y las Ardillas';
    console.log(moviesLove);
}

console.log(workWithMovies());