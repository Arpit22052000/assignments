const sum = (a,b,operation) => {
    return operation(a, b);
}

const calculate = sum(3, 4, function (a, b) {return a + b});
console.log(calculate)