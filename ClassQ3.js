class Triangle {
    constructor(base, height) {
      this.base = base;
      this.height = height;
    }
  
    calcArea() {
      let x = (this.base * this.height) / 2;
      console.log(x);
    }
  
    calcPerimeter() {
      let x = 3 * (this.base);
      console.log(x);
    }
  }
  
  const a = new Triangle(5, 6);
  a.calcArea();
  a.calcPerimeter();