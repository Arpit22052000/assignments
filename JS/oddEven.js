let oddEven = new Promise((resolve, reject) => {
    let value = 3;
    if (value % 2 == 0) {
        resolve(" 4 is even")
    }
    else {
        reject(" 4 is odd")
    }
})

async function consumeOddEven() {
    try {
        const resolve = await oddEven;
        console.log(resolve);
    } catch (error) {
        console.log(error);
    }
}

consumeOddEven();