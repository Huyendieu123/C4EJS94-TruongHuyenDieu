let array = [5, 7, 300, 90, 24, 50, 75];
alert("Hello, my nam is Phuong Nam and here is my sheeps sizes " + array.toString());
for (let i = 1; i <= 4; i++) {

    let maxInarray = Math.max.apply(Math, array);
    alert("Now my big sheep has size " + maxInarray + " let's shave it");

    let i1 = array.indexOf(maxInarray);
    array[i1] = 8;
    alert("After shearing, here is my flock " + array.toString());

    let array1 = [];
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] + 50;
        array1.push(array[i]);
    }
    alert("Month" + i + " one month has passed, my sheeps has growth, there are my size " + array1.toString());

}
let sum = array.reduce(function (total, Number) {
    return parseInt(total,10) +parseInt(Number,10);

}, 0);
let money = sum * 2
alert("My floge total size is:" + sum);
lert("I woulf get" + money );