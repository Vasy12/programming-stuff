'use strict';
const curry = (func, arity = func.length) => (...args) =>
    args.length >= arity
        ? func(...args)
        : curry(func.bind(this, ...args), arity - args.length);

module.exports = curry;
