"use strict";

// Rest operator, when ... used in definition
function sum() {
    for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
        numbers[_key] = arguments[_key];
    }

    return numbers.reduce(function (prev, current) {
        return prev + current;
    });
}
console.log(sum(1, 2, 3));

var nums = [1, 8];
function sum_two(one, two) {
    return one + two;
}
console.log(sum_two.apply(undefined, nums)); // Spread operator when ... used in call