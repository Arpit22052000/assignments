// const promise1 = new Promise(function (resolve, reject) {
//     // Do async task
//     // DB call, cryptography, network
//     setTimeout(function () {
//         console.log('Async task is completed');
//         resolve();
//     },1000)
// })

// promise1.then(function () {
//     console.log("Promise consumed");
// })

// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('Async task 2');
//         resolve();
//     }, 1000);
// }).then(function () {
//     console.log('Promise consumed again')
// })


// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve({userName: 'arpit', email:'a.kabra470@gmail.com'})
//     }, 1000)
   
// })

// promiseThree.then(function(user) {
//     console.log(user);
// })

// const promiseFourth = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = false;
//         if (!error) {
//             resolve({username:'arpit', password:123});
//         }
//         else {
//             reject('Invalid username or password!');
//         }
//     },1000)
// })

// promiseFourth
//     .then((user) => {
//         console.log(user)
//         return user.username
//     })
//     .then((username) => {
//         console.log(username)
//     }) 
//     .catch(function (error) {
//         console.log(error)
//      })
//     .finally(() => console.log('The promise is either resolved or rejected.'))


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({username:'javascript', password:123});
        }
        else {
            reject('ERROR : JS code went wrong!')
        }
        },1000)
})

async function consumePromiseFive() {
    try {
        const resolve = await promiseFive;
        console.log(resolve);
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()