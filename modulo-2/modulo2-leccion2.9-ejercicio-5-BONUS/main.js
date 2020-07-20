'use strict';

function paintTree(height){
  let tree = '';
  for(let i=0; i<height;i++){
    tree+='▲';
    console.log(tree);
  }
}

paintTree(5);