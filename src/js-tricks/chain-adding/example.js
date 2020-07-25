'use strict';
const add = require('./');

console.log(add(1)(2)(3)(4)(5).valueOf()); // 15
console.log(add(1)(2)(3)(4, 5).valueOf()); // 10
console.log(add(1, 2)(3)(4, 5).valueOf()); // 8
console.log(add(1)(2)(-4).valueOf()); // -1
