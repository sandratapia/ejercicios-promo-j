'use strict';

function getRandomDog(){
  //se mete en la api de las razas de perro
  fetch('https://dog.ceo/api/breeds/list/all')
    //convierte los datos a json
    .then(breedsResponse => breedsResponse.json())
    .then(breedsData => {
      //con esto convertimos el objeto en una array con las razas de perro
      const breeds = Object.keys(breedsData.message);
      console.log(breeds);
      //nos metemos en la api de los numeros aleatorios
      return fetch('https://api.rand.fun/number/integer?max=94')
       .then(numberResponse => numberResponse.json())
       .then(numberData => {
         //si hacemos un console.log nos da result y el numero que sea
         console.log(numberData);
         //por eso creamos la constante y metemos el resultaod en una constante
         const randomNumber = numberData.result;
         //hacemos otra constante y le decimos que con el random number nos diga la raza de perro
         const dogBreed = breeds[randomNumber];
         //con este fetch estamos buscando una imagen de la raza random
         return fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
          .then(picResponse => picResponse.json())
          .then(picData => {
            //esta constante nos devuelve el enlace de la imagen
            const dogImage = picData.message;
            const image = document.querySelector('img');
            const name = document.querySelector('.dog-breed');
            image.src = dogImage;
            name.innerHTML = dogBreed;
          })
       })
    })
}
//cada vez que pinchamos en el documento se refresca la pagina
document.addEventListener("click", getRandomDog);