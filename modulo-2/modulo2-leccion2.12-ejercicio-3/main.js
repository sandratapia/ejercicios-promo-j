'use strict';

const randomPersons = [
  {
    name: 'Silvia',
    surname: 'Dominguez',
    phone: 666666666,
  },
  {
    name: 'Andrés',
    surname: 'Perez',
    phone: 666666666,
  },
  {
    name: 'Laura',
    surname: 'Gutierrez',
    phone: 666666666
  }
];

const optionsName = document.querySelectorAll('option');
const selectName = document.querySelector('.select-person');

function completeInputs(event) {
  const inputName = document.querySelector('.input-name');
  const inputSurname = document.querySelector('.input-surname');
  const inputPhone = document.querySelector('.input-phone');

  if(selectName.value === '1'){
    inputName.value = randomPersons[0].name;
    inputSurname.value = randomPersons[0].surname;
    inputPhone.value = randomPersons[0].phone;
  }else if (selectName.value === '2'){
    inputName.value = randomPersons[1].name;
    inputSurname.value = randomPersons[1].surname;
    inputPhone.value = randomPersons[1].phone;
  }else if (selectName.value === '3'){
    inputName.value = randomPersons[2].name;
    inputSurname.value = randomPersons[2].surname;
    inputPhone.value = randomPersons[2].phone;
  }
}

selectName.addEventListener('change', completeInputs);
