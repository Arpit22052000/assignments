// for (let i = 0; i < 5; i++){
//     console.log('Hi', i);
//     for (let j = 0; j < 5; j++){
//         console.log("Hello");
//     }
// }

// for loop divisible by 3 in between 1 to 100
// for (let i = 1; i <= 100; i++){
//     if (i % 3 == 0) {
//         console.log(i)
//     }
//     else {
//         continue
//     }
// }

//when we don't know the length of the end of the digit, then while loop is best one
// let num = 84309584309
// let num2 = 0
// while (num > 0) {
//     console.log(num % 10)
//     num = parseInt(num / 10)
// }
// console.log(num2)

//fizzbuzz

for (let i = 1; i <= 100; i++){
    if (i%3==0 || i%5==0 )
    {
        if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz',i);
    }
    else if (i % 5 == 0) {
        console.log("Buzz",i);
    }
    else {
        console.log('Fizz',i)
        }
    }
    else {
        continue;
    }
}

