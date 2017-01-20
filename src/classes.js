/*
// ES5 way
function User(username, email) {
    this.username = username;
    this.email = email;
    // Bad way of binding function since it will redeclare function every
    // single time. Hence, we use prototype for this to be shared with
    // all instances of User
    this.changeUsername = function(username) {
        this.username = username;
    }
}
User.prototype.changeUsername = function(username) {
    this.username = username;
}
var user = new User('sumit', 'sumit.malik@vfirst.com');
user.changeUsername('test');
console.dir(user);
*/

// ES2015 way
/**
 * Class is just a syntactic sugar provided in ES2015, on back end it
 * things similar to the prototype fashion, saving us lines of code.
 * Additionally, it provides some additional things like static,
 * getters and setters
 */
class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    static init(...args) {
        return new User(...     args);
    }

    get getUsername() {
        return this.username;
    }

    set setUsername(username) {
        this.username = username;
    }

    changeUsername(username) {
        this.username = username;
    }
}
//let user = new User('sumit', 'sumit.malik@vfirst.com');
let user = User.init('sumit', 'sumit.malik@vfirst.com');
console.dir(user);
console.log(user.getUsername);

// Class is our first class citizen hence can be passed around anywhere
// such as function parameters, similar to anonymous classes in PHP
function log(strategy) {
    strategy.handle();
}

log(new class {
    handle() {
        console.log('Handled');
    }
});
