'use strict';

function getDogImage() {
  fetch("https://dog.ceo/api/breed/chihuahua/images/random")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const img = document.querySelector("img");
    img.src = data.message;
    img.alt = "Un perro";
  });
}
const btn = document.querySelector(".js-dog");
btn.addEventListener("click", getDogImage);
