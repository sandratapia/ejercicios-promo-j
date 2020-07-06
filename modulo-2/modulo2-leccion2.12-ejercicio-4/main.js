'use strict';

const paragraphs = document.querySelectorAll('p');

for(let paragraph of paragraphs){
  const altura = paragraph.offsetHeight;
  paragraph.style.height = `${altura/3}px`
}

