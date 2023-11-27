let laptop1 = {
    cpu: 'i9',
    ram: 16,
    brand: 'HP',

    compare: function (other) {
        if (this.cpu > other.cpu) 
            console.log('Laptop1 is faster')
        else
            console.log('Laptop2 is faster');
        
    },

    getConfig: function (num1, num2) {
        let storage = 256
        console.log(`Hello I have recently bought ${this.brand} laptop with ${this.cpu} chip in it and ${this.ram} RAM and ${storage} ROM.`)
        return null
    }

    
}


let laptop2 = {
    cpu: 'i11',
    ram: 8,
    brand: 'Apple',

    getConfig: function (num1, num2) {
        let storage = 256
        console.log(`Hello I have recently bought ${this.brand} laptop with ${this.cpu} chip in it and ${this.ram} RAM and ${storage} ROM.`)
        return null
    }

    
}



laptop1.compare(laptop2);