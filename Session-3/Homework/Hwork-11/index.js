let x = prompt("Enter the sentences numbers");
let array1 = x.split(",");
let array = [];
for (let i = 0; i < array1.length; i++) {
let s1 = array1[i] % 2;
if (s1 != 0 )
array.push(array1[i]);
}
alert(array);