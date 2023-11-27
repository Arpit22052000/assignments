let nums = new Set()

let values = ["Arpit",3,4,5,2,4,3,56,83,92,92,true,function(){return true}]

console.log(values)

values.forEach(n => {
    nums.add(n)
});

console.log(nums.has("Arpit"))
console.log(nums.has("arpit"))