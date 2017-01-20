function *range(start, end) {
    while (start <= end) {
        yield start;

        start++;
    }
}

let interator = range(1,3);

/*
console.log(interator.next());
console.log(interator.next());
console.log(interator.next());
console.log(interator.next());
*/

for (number of interator) {
    console.log(number);
}

console.log([...range(1,4)]);
