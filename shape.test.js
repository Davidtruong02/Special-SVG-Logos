const {Circle, Square, Triangle} = require('../Lib/shape.js');

describe('Circle', () => {
    test("circle should be a purple circle", () => {
        const testCirle = `<circle cx="100" cy="100" r="50" fill="purple" />`;
        const circle = new Circle();
        circle.setColor('purple');
        const actualCircle = circle.render();
        expect(actualCircle).toEqual(testCirle);
    })
    });

describe('Square', () => {
    test("square should be a red square", () => {
        const testSquare = `<rect x="50" y="50" width="100" height="100" fill="red" />`;
        const square = new Square();
        square.setColor('red');
        const actualSquare = square.render();
        expect(actualSquare).toEqual(testSquare);
    })
    });

describe('Triangle', () => {
    test("triangle should be a green triangle", () => {
        const testTriangle = `<polygon points="100,50 50,100 150,100" fill="green" />`;
        const triangle = new Triangle();
        triangle.setColor('green');
        const actualTriangle = triangle.render();
        expect(actualTriangle).toEqual(testTriangle);
    })
    });