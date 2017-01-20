// [].includes, not officially release in ES2015
let numbers = [1,2,4,5];
console.log(numbers.includes(4));

// [].find, find the first element satisfying the function call
class User {
    constructor(name, isAdmin) {
        this.name = name;
        this.isAdmin = isAdmin;
    }
}

let users = [
    new User('sam', false),
    new User('sah', true),
    new User('amy', false),
];

console.log(users.find(user => user.isAdmin).name);
