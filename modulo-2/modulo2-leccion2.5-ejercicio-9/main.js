'use strict';
const teacher1 = document.querySelector(".teacher--isra");
const teacher2 = document.querySelector(".teacher--tuerto");
const teacher3 = document.querySelector(".teacher--nasi");

function selectedTeacher (){
    const selectTeacher = event.currentTarget;
    selectTeacher.classList.toggle('teacher--selected');
    const favoriteSelect = selectTeacher.querySelector('.favorite');
    if(favoriteSelect.innerHTML === "Añadir"){
        favoriteSelect.innerHTML = 'Quitar';
    }else{
        favoriteSelect.innerHTML = 'Añadir';
    }
}

teacher1.addEventListener('click', selectedTeacher);
teacher2.addEventListener('click', selectedTeacher);
teacher3.addEventListener('click', selectedTeacher);




