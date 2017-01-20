'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
var User = function () {
    function User(username, email) {
        _classCallCheck(this, User);

        this.username = username;
        this.email = email;
    }

    _createClass(User, [{
        key: 'changeUsername',
        value: function changeUsername(username) {
            this.username = username;
        }
    }, {
        key: 'getUsername',
        get: function get() {
            return this.username;
        }
    }, {
        key: 'setUsername',
        set: function set(username) {
            this.username = username;
        }
    }], [{
        key: 'init',
        value: function init() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return new (Function.prototype.bind.apply(User, [null].concat(args)))();
        }
    }]);

    return User;
}();
//let user = new User('sumit', 'sumit.malik@vfirst.com');


var user = User.init('sumit', 'sumit.malik@vfirst.com');
console.dir(user);
console.log(user.getUsername);

// Class is our first class citizen hence can be passed around anywhere
// such as function parameters, similar to anonymous classes in PHP
function log(strategy) {
    strategy.handle();
}

log(new (function () {
    function _class() {
        _classCallCheck(this, _class);
    }

    _createClass(_class, [{
        key: 'handle',
        value: function handle() {
            console.log('Handled');
        }
    }]);

    return _class;
}())());