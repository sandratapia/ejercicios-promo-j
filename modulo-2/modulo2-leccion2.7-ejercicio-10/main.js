'use strict';

const items = [
    'Ada',
    1815,
    ['Informática', 'Matemática', 'Escritora'],
    {
      mother: 'Anna Isabella',
      father: 'Lord Byron'
    }
  ];

function aroundArray (items){
    for(let item of items){
        console.log(`El dato ${item} esta en la posicion ${items.indexOf(item)} y es de tipo ${item.typeOf}`);
    }
}
aroundArray(items);