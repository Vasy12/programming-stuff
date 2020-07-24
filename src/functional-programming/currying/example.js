'use strict';
const curry = require('./');

/**
 * some function
 */
const pow = (base, exponent) => {
    if (exponent === 0) return 1;

    return exponent < 0
        ? 1 / pow(base, Math.abs(exponent))
        : base * pow(base, exponent - 1);
};

/**
 * Carried function
 */
const curriedPow = curry(pow);

/**
 * Tests
 */
const raiseThreeToPower = curriedPow(3);
console.log('raiseThreeToPower(0) = ', raiseThreeToPower(0)); // 3 ^ 0
console.log('raiseThreeToPower(1) = ', raiseThreeToPower(1)); // 3 ^ 1
console.log('raiseThreeToPower(2) = ', raiseThreeToPower(2)); // 3 ^ 2
console.log('raiseThreeToPower(3) = ', raiseThreeToPower(3)); // 3 ^ 3
console.log('raiseThreeToPower(4) = ', raiseThreeToPower(4)); // 3 ^ 4
console.log('raiseThreeToPower(-1) = ', raiseThreeToPower(-1)); // 3 ^ -1
console.log('raiseThreeToPower(-2) = ', raiseThreeToPower(-2)); // 3 ^ -2
console.log('raiseThreeToPower(-3) = ', raiseThreeToPower(-3)); // 3 ^ -3
console.log('raiseThreeToPower(-4) = ', raiseThreeToPower(-4)); // 3 ^ -4

const raiseTwoToPower = curriedPow(2);
console.log('raiseTwoToPower(0) = ', raiseTwoToPower(0)); // 2 ^ 0
console.log('raiseTwoToPower(1) = ', raiseTwoToPower(1)); // 2 ^ 1
console.log('raiseTwoToPower(2) = ', raiseTwoToPower(2)); // 2 ^ 2
console.log('raiseTwoToPower(3) = ', raiseTwoToPower(3)); // 2 ^ 3
console.log('raiseTwoToPower(4) = ', raiseTwoToPower(4)); // 2 ^ 4
console.log('raiseTwoToPower(-1) = ', raiseTwoToPower(-1)); // 2 ^ -1
console.log('raiseTwoToPower(-2) = ', raiseTwoToPower(-2)); // 2 ^ -2
console.log('raiseTwoToPower(-3) = ', raiseTwoToPower(-3)); // 2 ^ -3
console.log('raiseTwoToPower(-4) = ', raiseTwoToPower(-4)); // 2 ^ -4
