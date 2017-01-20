class Person {
  constructor(name) {
    this.name = name;
  }

  greet () {
      return this.name + " says Hello!"; // review template strings
  }
}

console.log(new Person('Sumit').greet());
