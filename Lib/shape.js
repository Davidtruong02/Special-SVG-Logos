
// Shape class is the base class for all shapes
class Shape {
    constructor(){
        this.color = "";
    }
    setColor(color){
        this.color = color;
    }
}


// Circle class is a subclass of Shape
class Circle extends Shape {
    render(){
        return `<circle cx="100" cy="100" r="50" fill="${this.color}" />`;
    }
}

// Rectangle class is a subclass of Shape
class Square extends Shape {
    render(){
        return `<rect x="50" y="50" width="100" height="100" fill="${this.color}" />`;
    }
}
// Triangle class is a subclass of Shape
class Triangle extends Shape {
    render(){
        return `<polygon points="100,50 50,100 150,100" fill="${this.color}" />`;
    }
}

// Export the classes
module.exports = { Circle, Square, Triangle };