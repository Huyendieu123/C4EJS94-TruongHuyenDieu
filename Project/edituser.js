let BMI = {
    users: {
        name: "",
        email: "",
        password: "",
        isAdmin: Boolean,
    }
}

const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const data = urlParams.get('data')
console.log(data);

var User = null;
try {
    User = JSON.parse(localStorage.getItem(data));
} catch (error) { }

console.log(User);

var loginbutton = document.getElementById("submitform1");
var loginname = document.getElementById('value1');
var loginemail = document.getElementById('value2');
loginbutton.addEventListener('click', updateData1);
function updateData1() {
    BMI.users.name = loginname.value;
    BMI.users.email = loginemail.value;
    BMI.users.password = User.password;
    BMI_serialized = JSON.stringify(BMI.users);
    localStorage.setItem(data, BMI_serialized);
    window.history.back();
};
loginname.value = User.name;
loginemail.value = User.email;

