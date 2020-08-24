let product = {
    debug: 'The process of figuring out why your program has a certain error and how to fix it',
    done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
    defect: 'The formal word for ‘error’',
    pm: 'The short version  of Project Manager, the person in charge of the final result of a project',
    ui_ux: 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels',
};
console.log(product);

alert('Hi there, this is the dev dictionary');
let s = prompt('Enter the key word');
while (s == 'debug') {
    alert(product.debug);
    break;
}
if (s == 'dev') {
    alert('we not could find your word: dev');
}

alert('Hi there, this is the dev dictionary');
let s1 = prompt('Enter the key word');
while (s1 == 'dev') {
    let s = prompt('We not cound find the dev, leave your explanation');
    alert('Done');
    break;
}

product.dev = 'Devrlopers, creatue active at night';
let s3 = prompt('Enter the key word');
if (s3 == 'dev') {
    alert(product.dev);
}