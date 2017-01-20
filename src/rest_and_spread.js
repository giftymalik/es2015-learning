// Rest operator, when ... used in definition
function sum(...numbers) {
    return numbers.reduce(
        (prev, current) => prev + current
    );
}
console.log(sum(1,2,3));

let nums = [1,8];
function sum_two(one, two) {
    return one + two;
}
console.log(sum_two(...nums)); // Spread operator when ... used in call
