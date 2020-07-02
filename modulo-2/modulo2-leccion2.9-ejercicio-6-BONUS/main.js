'use strict';

function paintTree(height){
  let tree = '';
  let triangle = '▲';
  let isFirstTime = true;
  for(let i=0; i<height;i++){
    if(isFirstTime===true){
      console.log('★');
      isFirstTime=false;
      i--;
    }else{
      tree+=triangle;
      console.log(tree);
    }
  }
  console.log('|');
}

paintTree(5);