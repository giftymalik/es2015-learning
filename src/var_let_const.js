function fire(bool) {
    if (bool) {
        let foo = 'bar';
        const names = ['Sumit', 'Sahil'];
        //  Forcing Object Immutability
        // const names = Object.freeze(['Sumit', 'Sahil']);

        names = 'Amit';
        names.push('Amit');

        console.log(names);
        console.log(foo);
    } else {
        console.log(foo);
        console.log(xxx);
    }
}

fire(true);
