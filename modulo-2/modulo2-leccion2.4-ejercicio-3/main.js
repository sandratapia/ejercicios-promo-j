'use strict';

function price(a){
    return (21*a)/100;
}

document.write(`El precio sin IVA son ${10}, IVA ${price(10)} y el total con IVA ${price(10)+10}`)