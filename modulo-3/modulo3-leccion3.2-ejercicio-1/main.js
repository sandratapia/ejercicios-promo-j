'use strict';

class Polygon {
    constructor(sides, base, height){
        this.sides = sides;
        this.base = base;
        this.height = height;
    }
    perimeter(){
        return (this.base * this.sides);
    }
    area(){
        return (this.base * this.height);
    }
}

class Square extends Polygon {
    constructor (base){
        super(4, base, base);
    }
}

class Triangle extends Polygon {
    constructor (base, height){
        super(3, base, height);
    }
    area(){
        return(super.area()/2);
    }
}

const cuadrado = new Square(4);
const triangulo = new Triangle(4, 3);

console.log(`El perimetro del cuadrado es ${cuadrado.perimeter()}`);
console.log(`El área del cuadrado es ${cuadrado.area()}`);

console.log(`El perimetro del triángulo es ${triangulo.perimeter()}`);
console.log(`El área del triángulo es ${triangulo.area()}`);
