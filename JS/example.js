// Making of the promise
let promiseFunc = new Promise((resolve, reject) => {
    let string1 = "Hello";
    let string2 = "hello";

    if (string1 === string2) {
        resolve("Strings are equal");
    }
    else {
        reject("Strings aren't euqal");
    }
});

// making of the try cath

async function consumePromise() {
    try {
        const resolve = await promiseFunc;
        console.log(resolve);
    } catch (error) {
        console.log(error);
    }
}

consumePromise();