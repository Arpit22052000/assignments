// let nums = [5, 6, 7, 8]
// // console.log(nums);

// let [a, b,, d] = nums;
// console.log(d);

// let a = 5;
// let b = 6;
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

let intro = "My name is Arpit and I am learning JS currently."

intro = intro.split(' ')
console.log(intro)
let [a, b, c, d, e, ...g] = intro
console.log(g);
