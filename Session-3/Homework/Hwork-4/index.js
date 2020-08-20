let array1 = ['C', 'R', 'U', 'D'];
let array2 = ['jean', 'T-shirt', 'Socks'];
let menu = prompt("Hi there, welcome to shop admin partner, what do you want [" + array1.toString() + "]");
if (array1.indexOf(menu) < 0 || array1.indexOf(menu)>=array1.length ) {
    alert('This command is not supported');
}

else if (menu == 'R') {
    console.log(" The current item are:");
    for (let i = 1; i <= array2.length; i++) {
        console.log(i + "." + array2[i - 1]);
    }

}
else if (menu == 'C') {
    let Newitem = prompt("Enter the name of new item:");
    alert("Done");
    array2.push(Newitem);
    let menu = prompt("Hi there, welcome to shop admin partner, what do you want [" + array1.toString() + "]");
    if (menu == "R");
    for (let i = 1; i <= array2.length; i++) {
        console.log(i + "." + array2[i - 1]);
    }
}
else if (menu == 'U'); {
let Newitem1 = prompt("Enter the position you want to update");
while (Newitem1 >=array2.length) {
    Newitem1 = prompt("Enter the position you want to update");
}
let Newitem2 = prompt("Enter the new name");
alert("Done");
array2[Newitem1] = Newitem2;
let menu = prompt("Hi there, welcome to shop admin partner, what do you want [" + array1.toString() + "]");
if (menu == "R");
    for (let i = 1; i <= array2.length; i++) {
        console.log(i + "." + array2[i - 1]);
    }


}

