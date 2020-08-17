var s1 = ("L");
var s2 = ("H");
for (let i = 0; i < 3; i++) {
    console.log(s1);  
}

for (let i = 0; i < 3; i++) {
    console.log(s2);
}



let x = prompt("Enter the total of L & H");
let maxL = Math.floor(x/2);
let maxH = x - maxL;
if (maxH > maxL) {
    maxL = maxH;
    maxH = x - maxL;
}
for (let i = 0; i < maxL; i++) {
    console.log(s1);  
}

for (let i = 0; i < maxH; i++) {
    console.log(s2);
}



var s3 = 0;
var s4 = 1;

for (let i = 0; i < 4; i++) {
    console.log(s3);  
    console.log(s4);
}

let x1 = prompt("Enter the total of 0 & 1");
for (let i = 0; i < x1; i++) {
    console.log(s3);  
    console.log(s4);
}
