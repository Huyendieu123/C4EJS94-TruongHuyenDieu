alert("Tell me about at least 2 way to perform ‘JS swap variables’ and give example");
// cách 1
let a = 5;
let b = 6;
console.log(a, b);
b = [a, a = b][0];
console.log(a, b);

// cách 2
let a = 5;
let b = 6;
console.log(a, b);
let x = b;
b = a;
a = x;
console.log(a, b);