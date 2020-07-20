'use strict';

function paintTree(height){
  let space;
  let triangle = '▲';
  let spaceNeeded = height - 1;
  let isFirstTime = true;
  if (isFirstTime===true){
    for(let i=0; i<height; i++){
      space = '';
      for (let k =0; k<spaceNeeded;k++){
        space+=' '
      }
      console.log(space+'★');
    }
  }
  for (let i = 0; i < height; i++, spaceNeeded--) {
    space = '';
    for (let k = 0; k < spaceNeeded; k++) {
      space += ' ';
    }
    console.log(space + triangle);
    triangle = triangle + '▲▲';
  }
  spaceNeeded = height - 1;
  space = '';
  for (let k = 0; k < spaceNeeded; k++) {
    space += ' ';
  }
  console.log(space + '|');
}

paintTree(5);