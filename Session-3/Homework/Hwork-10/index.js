let s = prompt("Enter the sequence of name");
let array1 = s.split(",");
let array = [];
for (let i = 0; i < array1.length; i++) {
    let s1 = ("<" + array1[i].toString() + ">");
    array.push(s1);
}
alert(array);
