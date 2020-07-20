'use strict';

const urlJson = 'https://raw.githubusercontent.com/oneeyedman/terms/master/terms.js';

fetch(urlJson)
  .then(response => response.json())
  .then(data => {
    function writeThis(word, number){
        for(let i=0;i<number;i++){
          console.log(word, number);
        }
    }
    function writeMyArray(data){
        for(let object of data){
          writeThis(object.text, object.total);
        }
    }
    writeMyArray(data.results);
});
