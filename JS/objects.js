// let person = "Arpit" // variable
// const person1 = { firstName: "Arpit", lastName: "Kabra" } // variable
// other method

// const person2 = {}
// person2.fname = "Arpit",
// person2.lname = "Kabra",
// person2.age = 23,
// person2.height = "5'11"
 
// console.log(person2)

// let x = person2
// console.log(x)
// x.age = 50
// console.log(person2)
// console.log(x)

// //properties of obejcts

// console.log(x.fname);
// console.log(x["lname"]);

// for (value in person2) {
//     console.log(person2[value])
// }

// person2.nationality = 'Indian'; \
// for(val in person){}

// for (values in person2) {
//     console.log(person2[values])
// }

// delete person2.nationality;

// for (val in person2) {
//     console.log(person2)
// }

//nested objects
const car = {
    name: 'i20',
    brand: 'Hyundai',
    mileage: 18,
    owner: {
        fname: "Seema Kabra",
        age: 48,
        address : "RC VYAS"
    }
}

for (val in car) {
    console.log(car.owner['val']);
}

console.log

const laptop = {
    brand: 'Dell',
    ram: 4,
    rom: 1024,
    price : 30000
}


//now to dectructure the laptop 1, we should use different things
const {brand, ram, rom, price} = laptop
console.log(brand)