'use strict';

const inputName = document.querySelector('.input-name');
const inputSurname = document.querySelector('.input-surname');
const name = document.querySelector('.name-surname');

document.addEventListener('keyup', function(){
  const paragraph = document.querySelector('.name-surname');
  paragraph.innerHTML = inputName.value + ' ' + inputSurname.value;
  const userInfo = {
    name: inputName.value,
    surname: inputSurname.value
  }
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
  console.log(userInfo);
})

const recoverInfo = () => {
  const local = localStorage.getItem('userInfo');
  const dataLocal = JSON.parse(local);
  if (dataLocal !== null){
    inputName.value = dataLocal.name;
    inputSurname.value = dataLocal.surname;
  }
};
recoverInfo();
