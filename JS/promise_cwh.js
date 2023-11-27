// let p1 = new Promise((resolve,reject) => {
//     console.log("Promise pending");
//     setTimeout(() => {
//         resolve(false)
//     }, 5000);

// })

// let p2 = new Promise((resolve,reject) => {
//     console.log("Promise pending");
//     setTimeout(() => {
//         reject(new Error("I am an Error."))
//     }, 5000);

// })

// p1.then((value) => {
//     console.log(value)
// }).catch((error) => {
//     console.log(`Error: ${error}`)
// })

// p2.then((value) => {console.log(value)}, (error) => {console.log(error)})




let p1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("Hello How are you?")
        resolve("I am fine, let's ask to p2 as well..");
    }, 2000);
})


p1.then((value) => {
    console.log(value)
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("We are into p2");
            resolve("Yeah i am fine as well, let's ask 2nd .then")
        },2000)
        
    })
}).then((value) => {
    setTimeout(() => {
        console.log("This is 2nd .then, how may i help you")
    }, 5000);
}).then((value) => {
    setTimeout(() => {
        console.log("Nothing much we were playing for 10 seconds. ")
    }, 10000);
    
})






















