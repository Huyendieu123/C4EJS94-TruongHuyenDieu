let cenlius = prompt("Enter the temperature of the cenlius", "10")
let fahrenheit = ((9 / 5) * cenlius + 32);
let x1 = fahrenheit.toFixed(1)
document.write("<B>" + cenlius + "(C) " + "=" + x1 + "(F)" + "</B>");
document.write("<BR>");
console.log(cenlius);
console.log(x1);