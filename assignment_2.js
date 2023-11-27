/*
Write a JavaScript function that takes an array and a value and search that value in the given array.

Write a function which takes two arguments - an array and a value. If the value provided in the argument is found in the array, the function should return the position of the element in an array. If the element is not found, the function should return "-1".

Test the code by defining an array and pass that array as an argument in your function
 */

function search(arr) {
    for (x in arr) {
        console.log(arr[x])
    } 
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
search(arr);
//let num = prompt("Enter the value to search in array: ");
//search(arr, num);