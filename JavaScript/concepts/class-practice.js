'use strict';

// Class Declaration
// =================
// Function declarations are hoisted
// Class declarations are not, so the next line wouldn't pass
// let p = new Rectangle(5, 9);

// You use the `class` keyword and the name of the class, 
// similar to function declarations.
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;   
  }
}

// This will pass since the Rectangle class was previously defined
const box = new Rectangle(5, 9); //?


// Class Expressions
// =================

// unnamed 
let Parallelagram = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
// Class expressions can be named or unnamed
console.log(Parallelagram.name);

// named
let Trapezoid = class Trapezoid2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
// Any named class expression is local to the class's body, 
// but is retrievable with the name property
console.log(Trapezoid.name);


// Prototype Methods
// =================

class Dimensional {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Dimensional(10, 10);

console.log(square.area); //?