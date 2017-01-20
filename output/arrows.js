"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TaskCollection = function () {
    function TaskCollection() {
        var tasks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        _classCallCheck(this, TaskCollection);

        this.tasks = tasks;
    }

    _createClass(TaskCollection, [{
        key: "prepare",
        value: function prepare() {
            // Old Way
            this.tasks.forEach(function (task) {
                console.log(task);
            });

            // Version 0.1
            this.tasks.forEach(function (task) {
                console.log(task);
            });

            // Version 0.2
            this.tasks.forEach(function (task) {
                return console.log(task);
            });

            /**
            * Version 0.3 => For multiple params paranthesis are required
            * around arguments
            */
            this.tasks.forEach(function (task, index) {
                return console.log(task, index);
            });
        }
    }]);

    return TaskCollection;
}();

var Task = function Task() {
    _classCallCheck(this, Task);
};

new TaskCollection([new Task(), new Task(), new Task()]).prepare();