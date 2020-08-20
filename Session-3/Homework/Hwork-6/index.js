let num = prompt("Enter squenen of Number, separated by ","");
let array = num.split(",");
let  minInarray = Math.min.apply(Math, array);
alert("The smallest is " +minInarray);