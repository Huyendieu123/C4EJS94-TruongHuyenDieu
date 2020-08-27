let obj1 = {
    name: 'HP Envy 13aq',
    price: 21000,
    brand: 'HP',
    quantity: 5,
};

let obj2 = {
    name: 'Dell XPS 9370',
    price: 30000,
    brand: 'Dell',
    quantity: 1
};

let obj3 = {
    name: 'Dell Inspiron 3567',
    price: 9300,
    brand: 'Dell',
    quantity: 12,
};

let obj4 = {
    name: 'Dell Latitude E5450',
    price: 8600,
    brand: 'Dell',
    quantity: 2,

};

let obj5 = {
    name: 'Asus Zenbook',
    brand: 'Asus',
    price: 20000,
    quantity: 4,
};

let obj6 = {
    name: 'HP Pavilion',
    brand: 'HP',
    price: 14000,
    quantity: 7,
};
let array1 = [];
let array2 = [];
let array3 = [];
let array = [obj1, obj2, obj3, obj4, obj5, obj6];
for (let i = 0; i < array.length; i++) {
    let s = array[i].brand;

    if (s == 'HP') {
        array1.push(array[i]);
    } else if (s == 'Dell') {
        array2.push(array[i])
    } else if (s == 'Asus') {
        array3.push(array[i]);
    }


}

console.log(array1);
console.log(array2);
console.log(array3);

let x = prompt('Which brand?');
let arrays = [array1, array2, array3];
for (let i = 0; i < arrays.length; i++) {
    let x1 = ' There are ';
    let checktontai = false;
    for (let k = 0; k < arrays[i].length; k++) {
        if (x == arrays[i][k].brand) {
            x1 += arrays[i].length + arrays[i][k].brand + ' inventory ';
            checktontai = true;
        }
    }
    if (checktontai)
        alert(x1);
}







