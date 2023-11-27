function display(some) {
    document.getElementById('double').innerText = some;
}

function double(array,callback) {
    item =  (array.forEach((item) => {
        item *= 2;
    }))
    callback(item);
}

let array1 = [12, 54, 34, 19, 36];
double(array1, display);

