function display(value) {
    console.log(value)
}

let testing = new Promise(function (myResolve, myReject) {
    let x = 1;

    if (x == 0) {
        myResolve("OK, you may now proceed next");
    }
    else {
        myReject("Error, you have to recheck username, password you entered")
    }
});

testing.then(
    function (value) { display(value); },
    function (error) { display(error); }
);