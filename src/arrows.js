class TaskCollection {
    constructor(tasks = []) {
        this.tasks = tasks;
    }

    prepare() {
        // Old Way
        this.tasks.forEach(function(task) {
            console.log(task)
        });

    // Version 0.1
        this.tasks.forEach((task) => {
            console.log(task)
        });

    // Version 0.2
        this.tasks.forEach(task => console.log(task));


    /**
    * Version 0.3 => For multiple params paranthesis are required
    * around arguments
    */
        this.tasks.forEach((task, index) => console.log(task, index));
    }
}

class Task {}

new TaskCollection([
    new Task, new Task, new Task
]).prepare();
