// function laptop(brand, ram, rom, price) {
//     this.brand = brand,
//     this.ram = ram,
//     this.rom = rom,
//     this.price = price
// }

// let laptop1 = new laptop("Apple", 8, 256, '$1400');
// let laptop2 = new laptop("Dell", 16, 512, '$1600');

// // console.log(laptop1)

// //now to dectructure the laptop 1, we should use different things
// num = 2
// while (num > 0) {
//     console.log(num)
//     const { brand, ram, rom, price } = 'laptop'+`${num}`;
//     console.log(brand)
//     console.log(ram)
//     console.log(rom)
//     console.log(price)
    
//     num -= 1;
// }


// const note = {
//   id: 1,
//   title: 'My first note',
//   date: '01/01/1970',
//   author: {
//     firstName: 'Sherlock',
//     lastName: 'Holmes',
//   },
// }

// const { id, title, date, author: { firstName, lastName } } = note

// console.log(`The note having the id ${id}, title : ${title}, date:${date}, author : ${firstName} ${lastName}`)




const dates = [2000, 5, 22]
const [year, month, date] = dates

console.log(`I was born on ${date}/${month}/${year}`)





















