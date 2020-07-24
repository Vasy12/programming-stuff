'use strict';
const compose = require('./');

const increment = n => n + 1;
const decrement = n => n - 1;
const double = n => n + n;
const square = n => n * n;

const incrementDouble = compose(double, increment);
console.log('incrementDouble(10) = ', incrementDouble(10)); // 22

const squareDouble = compose(double, square);
console.log('squareDouble(10) = ', squareDouble(10)); // 200

const doubleSquare = compose(square, double);
console.log('doubleSquare(10) = ', doubleSquare(10)); // 400

const doubleSquareIncrement = compose(increment, square, double);
console.log('doubleSquareIncrement(10) = ', doubleSquareIncrement(10)); // 401

const decrementDoubleSquareIncrement = compose(
    increment,
    square,
    double,
    decrement
);
console.log(
    'decrementDoubleSquareIncrement(10) = ',
    decrementDoubleSquareIncrement(10)
); // 325
