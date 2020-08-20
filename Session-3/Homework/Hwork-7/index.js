let array = [3, 4, 6, -9, 10, -88, 2];
let s = prompt("Enter a number");
s = parseInt(s, 10);
while (array.indexOf(s) < 0) {
    alert(s + " is not found in my array");
    s = prompt("Enter a number");
    s = parseInt(s, 10);
}
alert(s + " is found in my array at index " + array.indexOf(s));