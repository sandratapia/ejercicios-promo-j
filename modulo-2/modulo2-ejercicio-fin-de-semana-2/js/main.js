'use strict';

const urlJson = 'https://beta.adalab.es/ejercicios-extra/js-fetch-arrays-princesas-disney/data/users.json';
let users =[];
const favourites =[];

fetch (urlJson)
  .then(response => response.json())
  .then(data => {
    let listContent = '';
    for (let princess of data){
      const picture = princess.picture;
      const name = princess.name;
      const comment = princess.comment;

      const avatar = `<div class="avatar__container">
                        <img class="image-avatar" src="${picture}">
                        <h3 class="name">${name}</h3>
                      </div>`;

      const description = `<div class="description__container">
                              <p class="description">${comment}</p>
                            </div>`;

      const item = `<li class="princess-item">${avatar+description}</li>`;

      listContent += item;
    }
    const list = document.querySelector('.js-user-list');
    list.innerHTML = listContent;

    users = document.querySelectorAll('.princess-item');
    for (let user of users){
      user.addEventListener('click', makeFriend);
    }
  })

  function makeFriend(event){
    event.currentTarget.classList.toggle('friend');
    favourites.push(event.currentTarget);
    console.log(favourites);
  }