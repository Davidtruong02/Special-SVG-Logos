
// Shape class is the base class for all shapes
class Shape {
    constructor() {
        this.color = "";
    }
    setColor(color) {
        this.color = color;
    }
}


// Circle class is a subclass of Shape
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

// Rectangle class is a subclass of Shape
class Square extends Shape {
    render() {
        return `<rect x="90" y="40" width="130" height="110" fill="${this.color}" />`;
    }
}
// Triangle class is a subclass of Shape
class Triangle extends Shape {
    render() {
        return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
    }
}

// Export the classes
module.exports = { Circle, Square, Triangle };