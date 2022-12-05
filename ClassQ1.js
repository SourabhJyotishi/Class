class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        console.log(this.height * this.width);
    }

    calcPerimeter() {
        let x = 2 * (this.height + this.width);
        console.log(x);
    }
}

const a = new Rectangle(100, 50);
a.calcArea();
a.calcPerimeter();