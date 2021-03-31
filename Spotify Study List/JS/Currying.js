//Curried functions, higher order style
function multiply (x) {
    return function (y) {
        return x * y;
    }
}

const multiply2 = multiply(2);
console.log(multiply2(5));



//Curried bind style
function add (x, y) {
    return x + y;
}

const add2 = add.bind(this, 2);
console.log(add2(10))