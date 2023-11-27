let p1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject(new Error)
    }, 11000)
})

let p2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('value2')
    }, 2000)
})

let p3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('value3')
    }, 5000)
})

let promise_all = Promise.any([p1,p2,p3])

promise_all.then((value) => {
    console.log(value)
})