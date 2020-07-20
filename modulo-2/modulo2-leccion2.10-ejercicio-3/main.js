'use strict';

const btn = document.querySelector(".js-btn");
btn.addEventListener("click", getInfoGit);

function getInfoGit() {
  const username = document.querySelector('.username').value;
  fetch(`https://api.github.com/users/${username}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    const name = document.querySelector('.name');
    name.innerHTML = data.login;

    const img = document.querySelector("img");
    img.src = data.avatar_url;

    const repositories = document.querySelector('.repositories');
    repositories.innerHTML = data.public_repos;
  });
}
