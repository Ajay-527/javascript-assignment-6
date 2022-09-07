class Rectangle {
  area() {
    alert("Area of the square is " + Math.pow(this.length, 2));
  }
}

class Square extends Rectangle {
  constructor(length) {
    super();
    this.length = length;
  }
}
let length = parseInt(prompt("enter the length of the squar"));
let SquareObject = new Square(length);

SquareObject.area();
