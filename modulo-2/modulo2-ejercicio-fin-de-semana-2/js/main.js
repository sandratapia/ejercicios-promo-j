'use strict';

const princessUsers = [
    {
      name: 'Ariel del Mar',
      email: 'dangerousRedHair@example.com',
      phone: Number(4244724697),
      comment:'Ahora que estamos en fase 3 ¿Alguna amigui se apunta a una mariscada el Sábado?',
      picture: './images/ariel.jpg',
    },
    {
      name: 'Pocahontas Hojas Verdes',
      email: 'poquigreen85@example.com',
      phone: Number(4244723697),
      comment:'No puedo con tanta belleza en la naturaleza, vivo en un síndrome de Stendhal permanente',
      picture: './images/pocahontas.jpg'
    },
    {
      name: 'Mégara Theotokópoulos',
      email: 'lagreca@example.com',
      phone: Number(4344723697),
      comment:'Definitivamente odio a la raza humana, 2020 gracias, puedes extinguirnos ya',
      picture: './images/megara.jpg'
    },
    {
      name: 'Jasmine Moreno Perales',
      email: 'morenoJasmin@example.com',
      phone: Number(4344723697),
      comment:'Mi churri y yo nos mudamos y la alfombra no nos cabe en el pisito, os dejo el enlace de Wallapop, 30 euritos ;)',
      picture: './images/jasmine.jpg'
    },
    {
      name: 'Bella del Valle',
      email: 'labellapati@example.com',
      phone: Number(4344723697),
      comment:'La última novela de Vargas Llosa me ha llegado al alma, no puedo más, qué hombre más maravilloso, qué pluma, qué PASIÓN!!',
      picture: './images/bella.jpg'
    },
    {
      name: 'Mulan Yin Yang',
      email: 'killingAtila@example.com',
      phone: Number(4344723697),
      comment:'Estoy pensando en cortarme el pelo, así en plan chiquillo, para el verano',
      picture: './images/mulan.jpg'
    },
    {
      name: 'Rapunzel Rubio',
      email: 'longhairgirl@example.com',
      phone: Number(4344723697),
      comment:'Hoy me siento un poco como si viviera en una tercera dimensión... ¿A alguna más le pasa?',
      picture: './images/rapunzel.jpg'
    }
] 

let users = [];
let favorites = [];

function paintPrincess (array){
    console.log(array);
    let infoPrincess = '';
    const paintHTML = document.querySelector('.js-user-list');
    for(let element of array){
        /*infoPrincess = `
        <li class="princess">
            <div class="profile>
              <div>
                <img class="img" src=\"${element.picture}\">
              </div>
              <h2>${element.name}</h2>
            </div>
            <p class="grid2">${element.comment}
        </li>`;
        paintHTML.innerHTML += infoPrincess;*/
        const li = document.createElement('li');
        const profile = document.createElement('div');
        profile.classList.add('profile');
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = element.picture;
        div.appendChild(img);
        profile.appendChild(div);
        const h2 = document.createElement('h2');
        h2.innerHTML = element.name;
        profile.appendChild(h2);
        const p = document.createElement('p');
        p.classList.add('grid2');
        p.innerHTML = element.comment;
        li.appendChild(profile);
        li.appendChild(p);
        paintHTML.appendChild(li);

        console.log(paintHTML)

    }
}

paintPrincess(princessUsers);