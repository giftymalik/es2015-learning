'use strict';

// 1) Object shorthand
var name = 'Sumit';
var age = 25;
console.log({ name: name, age: age });

// 2) Short method syntax
var name = 'Sumit';
var age = 25;
var obj = {
    name: name,
    age: age,
    greet: function greet() {
        return 'Hello, ' + name;
    }
};
console.log(obj.greet());

// 3) Object Destructuring
// Destructures object to variables and takes only selective values as
// indicated in the parameters
function greet(_ref) {
    var name = _ref.name,
        age = _ref.age;

    console.log('Hi ' + name + '. You are ' + age);
}

greet({
    name: 'Sumit',
    age: 25,
    gender: 'Male',
    location: 'India'
});