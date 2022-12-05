class Square {
    constructor(sides) {
      this.sides = sides;
    }
  
    calcArea() {
      let a = 2 * this.sides;
      console.log(a);
    }
  
    calcPerimeter() {
      let x = 4 * (this.sides);
      console.log(x);
    }
  }
  
  const a = new Square(10);
  a.calcArea();
  a.calcPerimeter();