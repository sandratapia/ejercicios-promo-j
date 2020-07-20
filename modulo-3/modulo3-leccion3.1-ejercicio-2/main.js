'use strict';

class square {
    constructor(sides, longSide){
        this.sides = sides;
        this.longSide = longSide;
    }
    perimeter(sides, longSide){
        console.log(Number(longSide * sides));
    }
    area(longSide){
        console.log(Math.pow(longSide, 2));
    }
}

const cuadrado = new square('cuadrado');

cuadrado.perimeter(4, 7);
cuadrado.area(7);