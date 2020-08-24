let product1 = {
    name: 'Xiaomi portable charger 20000mah',
    Brand: 'Xiaomi',
    Price: 428,
    Color: 'white',
    Category: 'Charger'
};

let product2 = {
    name: 'VSmart Active 1',
    Brand: 'VSmart',
    Price: 5487,
    Color: 'Black',
    Category: 'Phone'
};

let product3 = {
    name: 'IPhone X',
    Brand: 'Apple',
    Price: 21490,
    Color: 'Gray',
    Category: 'Phone'
};

let product4 = {
    name: 'Samsung Galaxy A9 X',
    Brand: 'Samsung',
    Price: 8490,
    Color: 'Blue',
    Category: 'Phone'
};

let array = [product1, product2, product3, product4];
for (let i = 0; i < array.length; i++) {
    console.log(array[i].name);
    console.log(array[i].Price);
}

let i = prompt('Enter product position');
console.log(array[i - 1]);

let s = prompt('Enter your category');
for (let i = 0; i < array.length; i++) {
    if (s == array[i].Category) {
        console.log(array[i]);
    }
}
let array1 = ['PhukienzeroDientuccc', 'TgddDdghnVhStore', 'Tgdd', 'Tgdd'];
for (let i = 0; i < array.length; i++) {
    array[i].Providers = array1[i];
    console.log(array[i]);
}

