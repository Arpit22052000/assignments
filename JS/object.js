//let input = 'name'

// let aliens = {
//     name: 'Arpit',
//     tech: 'JS',
//     //'work exp': 4
// }

// console.log(aliens)
// console.log(aliens['name'])
// console.log(aliens.tech)
// console.log(aliens['work exp'])
// console.log(aliens[input])

let alien = {
    name: 'Arpit',
    tech: 'JS',
    laptop: {
        CPU: 'i7',
        RAM: '4 GB',
        brand : 'Macbook'
    }
}

for (let key in alien) {
    console.log(key, alien[key]);
}

for (let key in alien.laptop) {
    console.log(key, alien.laptop[key]);
}

//console.log(alien?.laptop?.brand?.length)

//delete alien.laptop
//console.log(alien)
