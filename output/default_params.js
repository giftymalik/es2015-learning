"use strict";

function getDiscountPercentage() {
    return .10;
}
/**
 * Default could be anything like a primitive value of 10,20 etc to that
 * of a function
 */
function applyDiscount(cost) {
    var discount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getDiscountPercentage();

    return cost - cost * discount;
}

alert(applyDiscount(100));