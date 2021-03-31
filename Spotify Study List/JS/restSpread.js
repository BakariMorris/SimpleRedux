function add(...args) {
    return args.reduce((element, accumulator ) => element + accumulator);
}

const results = add(5, 10, 20);
console.log(results);

function add2(...[a,b,c]) {
    return a+b+c;
}

const results2 = add2(5, 10, 20);
console.log(results);

