let num = prompt("Enter squenen of Number, separated by commas:");
let array = num.split(",");
// let sum = 0;
// array.forEach(element => {
//     sum += parseInt(element,10);
// });
// alert("The sum of them is:" + sum);

let sum = array.reduce(function (total, Number) {
    return parseInt(total,10) +parseInt(Number,10);

}, 0);
alert("The sum of them is:" + sum);