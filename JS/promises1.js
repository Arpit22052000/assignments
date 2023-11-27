const helperPromise = function () {
    const promiseStr = new Promise(function (resolve, reject) {
        const string1 = "Hello World!"
        const string2 = "Hello world!"
        if (string1 == string2) {
            resolve("Strings are same.");
        } else {
            reject("strings are different.");
        }
    })
    return promiseStr;
};

async function demoPromise() {
    try {
        let message = await helperPromise();
        console.log(message);
    } catch (error) {
        console.log(error)
    }
}

demoPromise();



// promiseStr
//     .then(function () {
//         console.log("Both the strings are the same.")
//     }).catch(function () {
//         console.log("Strings aren't same.")
//     })
