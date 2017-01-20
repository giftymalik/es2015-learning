let set = new Set(['one', 'two', 'three', 'three']);

console.log(set);

set.has('two'); // to check if an item exists
set.size; // size of set
set.add('four'); // add item to set
set.delete('four'); // delete item of set
set.forEach(num => console.log(num)); // iterate over set
set.clear(); // clear set
set.keys(); // return iterator of keys
set.values(); // return iterator of values
// for-of operator on set to iterate
for (i of set) {
    console.log(i);
}
// to convert to array
[...set];
// to initialize a set of an array
let arr = [1,2,3,4];
let set2 = new Set(arr);
