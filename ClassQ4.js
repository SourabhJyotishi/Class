class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    calcArea() {
      let x = Math.PI * (this.radius * this.radius);
      console.log(x);
    }
  
    calcCircumference() {
      let x = 2 * Math.PI * this.radius;
      console.log(x);
    }
  }
  
  const a = new Circle(3);
  a.calcArea();
  a.calcCircumference();