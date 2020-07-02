'use strict';

const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false
  }
];

//PINTAR TARERA EN HTML
const content = document.querySelector('.body');

function infoInner(array){
  for(let element of array){
  let li = document.createElement('li');
  let check = document.createElement('input');
  check.setAttribute('type', 'checkbox');
  li.innerHTML = element.name;
  if(element.completed===true) { //TAMBIEN SE PUEDE HACER SIN PONER ===TRUE PORQUE ES TRUTHY
    li.classList.add("tachar");
    check.checked = true;
  }
  content.appendChild(li);
  li.appendChild(check);
  check.addEventListener('change', function(event){
    let checkActive = event.currentTarget;
    if(checkActive.checked) {
      li.classList.add('tachar');
      element.completed = true;
    }else{
      li.classList.remove('tachar');
      element.completed = false;
    }
    console.log(element);
  });
  }
}

infoInner(tasks);

//ESTA FUNCION ME DICE EL NUMERO DE TAREAS QUE TENGO EN EL ARRAY
function numberTasks (arr, propiety){
  console.log(`El número de tareas es ${arr.length}.`);
}
numberTasks(tasks);

//ESTA FUNCION ME DICE LAS TAREAS DEL ARRAY
const selectLis = document.querySelectorAll('li');

function taskofArray(array){
  for(let element of array){
    console.log(element.name);
    if(element.completed===true){
      console.log(`La tarea "${element.name}" ya ha sido realizada.`);
    }else{
      console.log(`La tarea ${element.name} está pendiente de completarse.`);
    }
  }
}

taskofArray(tasks);

