'use strict';

const inputsCity = document.querySelectorAll('.city');

function changeImages(event){
  const imgMadrid = document.querySelector('.foto-madrid');
  const imgParis = document.querySelector('.foto-paris');
  const imgNewyork = document.querySelector('.foto-newyork');

  if(event.currentTarget.value === '1'){
    imgMadrid.src = './images/madrid1.jpg';
    imgParis.src = './images/madrid2.jpg';
    imgNewyork.src = './images/madrid3.jpg';
  }else if (event.currentTarget.value === '2'){
    imgParis.src = './images/paris1.jpg';
    imgMadrid.src = './images/paris2.jpg';
    imgNewyork.src = './images/paris3.jpg';
  }else{
    imgNewyork.src = './images/newyork1.jpg';
    imgMadrid.src = './images/newyork2.jpg';
    imgParis.src = './images/newyork3.jpg';
  }
}

for(let city of inputsCity){
  city.addEventListener('change', changeImages);
}