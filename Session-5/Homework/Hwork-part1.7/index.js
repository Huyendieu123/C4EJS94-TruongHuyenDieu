let array = [0, 1, 2, 3];
let arraytmp = [];
let count = 0;
while (arraytmp.length < 4) {
    let rand = array[Math.floor(Math.random() * array.length)];
    if (arraytmp.indexOf(rand) < 0) {
        arraytmp.push(rand);
    }
}

let obj1 = {
    title: 'How many leg do an optopus has?',
    array1: ['1. 4 legs', '2. no leg', '3. 8 legs', '4. 2 legs'],
    result: '3'
};

let obj2 = {
    title: 'Which country in home to the kangaroo?',
    array1: ['1. Australia', '2. Autria', '3. New Zealand', '4. US'],
    result: '1'
};


let obj3 = {
    title: 'Which fictional detetive lived at 221b Baker Street?',
    array1: ['1. Waston', '2. Sam Spade', '3. Scupidu', '4. Sherlock Home'],
    result: '2'
};


let obj4 = {
    title: 'What sweet food made by bees using necta from flowers?',
    array1: ['1. Bread', '2. Honey', '3. Sugar', '4. Potent'],
    result: '2'
};

let array2 = [obj1, obj2, obj3, obj4];
for (let i = 0; i < arraytmp.length; i++) {
    let vitriarray2 = arraytmp[i];
    let s = array2[vitriarray2].title + '\n' + array2[vitriarray2].array1[0] + '\n' + array2[vitriarray2].array1[1] + '\n' + array2[vitriarray2].array1[2] + '\n' + array2[vitriarray2].array1[3];
    let resultall = prompt(s);
    let result1 = array2[vitriarray2].result;
    if (resultall == array2[vitriarray2].result) {
        count += count + 1;
    }

}
alert('We are out of question');
alert('You answered' + count + 'out of 4 question')
