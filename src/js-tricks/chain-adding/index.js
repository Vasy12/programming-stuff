'use strict';
/**
 * A Chain adding function
 * @param {*} n
 * @returns {*}
 */
const add = n => {
    const f = x => add(n + x);
    f.valueOf = () => n;
    return f;
};

module.exports = add;
