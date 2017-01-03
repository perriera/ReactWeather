var names = ['Jack','Bill','Ted'];

// names.forEach(function(name) {
//     console.log('forEach',name);
// });

// names.forEach( (name) => {
//      console.log('arrowFunc',name);
// });

// names.forEach( (name) => console.log('arrowFunc2',name) );

// names.forEach( name => console.log('arrowFunc3',name) );

// var returnMe = (name) => name + '!';
// console.log(returnMe('Jack'));

var person = {
    name: 'Jeo',
    greet: function() {
        names.forEach( name => {
            console.log(this.name + ' says hi to ' + name );
        });
    }
}

person.greet();

function add(a,b) {
    return a+b;
}

console.log(add(1,3));
console.log(add(9,0));

var add = ( a, b ) => {
    return a + b;
}

console.log(add(1,3));
console.log(add(9,0));

var add = ( a, b ) => a + b;

console.log(add(1,3));
console.log(add(9,0));
