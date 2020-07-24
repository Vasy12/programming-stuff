'use strict';
/**
 *
 * @param  {...Function} funcs
 * @returns {Function}
 */
const compose = (...funcs) =>
    funcs.reduce((composeFunc, currentFunc) => (...args) =>
        composeFunc(currentFunc(...args))
    );

module.exports = compose;
