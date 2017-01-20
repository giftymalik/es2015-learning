// 1) Object shorthand
var name = 'Sumit';
var age = 25;
console.log({name, age});

// 2) Short method syntax
var name = 'Sumit';
var age = 25;
var obj = {
    name,
    age,
    greet() {
        return `Hello, ${name}`
    }
}
console.log(obj.greet());

// 3) Object Destructuring
// Destructures object to variables and takes only selective values as
// indicated in the parameters
function greet({name, age}) {
    console.log(`Hi ${name}. You are ${age}`);
}

greet({
    name: 'Sumit',
    age: 25,
    gender: 'Male',
    location: 'India'
});
