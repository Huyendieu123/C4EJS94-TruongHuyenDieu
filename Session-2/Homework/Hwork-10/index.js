let weight = prompt("Your weight in kg");
let height = prompt("Your height in cm");
let x = (height / 100);
let BMI = (weight / (x * x));

if (BMI < 16) {
    alert("Severely underweight")

}
else if (BMI < 18.5) {
    alert("Underweight")
}
else if (BMI < 25) {
    alert("Normal")

}

else if (BMI < 30) {
    alert("Overweight")

}

else if (BMI >= 30) {
    alert("Obese")

}