'use strict';

class square {
    perimeter(longSide, sides){
        console.log(longSide * sides);
    }
    area(longSide){
        console.log(Math.pow(longSide, 2));
    }
}

const cuadrado = new square();
cuadrado.perimeter(9, 4);
cuadrado.area(9);