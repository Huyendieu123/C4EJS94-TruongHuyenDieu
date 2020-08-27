let obj1 = {
    title: 'con chó có mấy chân?',
    array1: ['1. một chân' , '2. hai chân', '3. ba chân' , '4. bốn chân'],
};

let s =  obj1.title + '\n' + obj1.array1[0] + '\n' + obj1.array1[1]+ '\n' + obj1.array1[2]+ '\n' + obj1.array1[3];
let result = Number(prompt(s));
alert (obj1.array1[result-1]);
    
