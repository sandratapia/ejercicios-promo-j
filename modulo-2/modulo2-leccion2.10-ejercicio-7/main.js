'use strict';

function getEmoji() {
  fetch("https://api.rand.fun/games/rockpaperscissorslizardspock")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    document.querySelector('.js-result').innerHTML = data.result
  });
}
document.querySelector('.js-emoji').addEventListener("click", getEmoji);
