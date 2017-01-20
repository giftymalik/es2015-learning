import TaskCollection, {foo} from './TaskCollection';

new TaskCollection([
    'Get metro',
    'Go Home',
    'Have Dinner'
]).dump();

console.log(foo);
