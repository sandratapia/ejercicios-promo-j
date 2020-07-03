'use strict';

const promos = [
  {
    promo: 'A',
    name: 'Ada',
    students: [
      {
        id: 'id-1',
        name: 'Sofía',
        age: 20
      },
      {
        id: 'id-2',
        name: 'María',
        age: 21
      },
      {
        id: 'id-3',
        name: 'Lucía',
        age: 22
      }
    ]
  },
  {
    promo: 'B',
    name: 'Borg',
    students: [
      {
        id: 'id-4',
        name: 'Julia',
        age: 23
      },
      {
        id: 'id-5',
        name: 'Tania',
        age: 24
      },
      {
        id: 'id-6',
        name: 'Alaia',
        age: 25
      }
    ]
  },
  {
    promo: 'C',
    name: 'Clarke',
    students: [
      {
        id: 'id-7',
        name: 'Lidia',
        age: 26
      },
      {
        id: 'id-8',
        name: 'Celia',
        age: 27
      },
      {
        id: 'id-9',
        name: 'Nadia',
        age: 28
      }
    ]
  }
];

const studentsWorkingInGoogle = ['id-2', 'id-3', 'id-5', 'id-9'];

function nameOfPromotion (array){
    let htmlText = '';
    const paintHTML = document.querySelector('.js-result');
    htmlText += `<ul>`;
    const newArrayStudents =[];
    for (let element of array){ 
      htmlText += `
        <li>
        <p>${element.name}</p>
        <p>Promo: ${element.promo}</p>
        <p>El número de alumnas es de: ${element.students.length}</p>
        <ul>`;
      for (let student of element.students){
        if(studentsWorkingInGoogle.includes(student.id)){
          htmlText  += `
          <li id=${student.id}>${student.name}, ${student.age}</li>`;
          newArrayStudents.push(student.id);
        }
      }
      htmlText +=`</ul></li>`;
    }
    htmlText +=`</ul>`;
    paintHTML.innerHTML = htmlText;
    for(let studentId of newArrayStudents){
      const selector = document.querySelector(`#${studentId}`);
      selector.addEventListener('click', (event) => {
        console.log(event.currentTarget.id);
      });
    }
}

nameOfPromotion(promos);