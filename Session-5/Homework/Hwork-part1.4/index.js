
let array = [1, 2];
let rand = array[Math.floor(Math.random() * array.length)];
if (rand == 1) {
    let obj1 = {
        title: 'Which fictional detetive lived at 221b Baker Street?',
        array1: ['1. Waston', '2. Sam Spade', '3. Scupidu', '4. Sherlock Home'],
    };
    
    let s = obj1.title + '\n' + obj1.array1[0] + '\n' + obj1.array1[1] + '\n' + obj1.array1[2] + '\n' + obj1.array1[3];
    let result = Number(prompt(s));
    alert(obj1.array1[result - 1]);
}
else {
    let obj2 = {
        title: 'What sweet food made by bees using necta from flowers?',
        array2: ['1. Bread', '2. Honey', '3. Sugar', '4. Potent'],
    };
    
    let s1 = obj2.title + '\n' + obj2.array2[0] + '\n' + obj2.array2[1] + '\n' + obj2.array2[2] + '\n' + obj2.array2[3];
    let result1 = Number(prompt(s1));
    alert(obj1.array2[result1 - 1]);    
}
