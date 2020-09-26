let BMI = {
    users: {
        name: "",
        email: "",
        password: "",
    },
    bmi: {
        height: Number(""),
        weight: Number(""),
        result: Number(""),
    },
}
if (localStorage.getItem(`userAdmin`) == null) {
        BMI.users.name = "admin";
        BMI.users.email = "admin@gmail.com";
        BMI.users.password = "123";
        BMI.users.isAdmin = true;
        BMI_serialized = JSON.stringify(BMI.users);
        localStorage.setItem(`userAdmin`, BMI_serialized);
        BMI_deserialized = JSON.parse(localStorage.getItem(`userAdmin`));
}

var x = document.getElementById("login-form");
var y = document.getElementById("register-form");
var z = document.getElementById("pointer-btn");
var l = document.getElementById("login");
var r = document.getElementById("register");
var ac = document.getElementById("action_title");

function register() {
    x.style.left = "-450px";
    y.style.left = "25px";
    z.style.left = "215px";
    l.style.color = "#EB4960";
    r.style.color = "#EB4960";
    ac.textContent = "Register";
}

function login() {
    x.style.left = "25px";
    y.style.left = "450px";
    z.style.left = "30px";
    l.style.color = "#EB4960";
    r.style.color = "#EB4960";
    ac.textContent = "Login";
}
var registerbutton = document.getElementById("submitform2");
var data1 = document.getElementById('value1');
var data2 = document.getElementById('value2');
var data3 = document.getElementById('value3');
registerbutton.addEventListener('click', updateData);
function updateData() {
    BMI.users.name = data1.value;
    BMI.users.email = data2.value;
    BMI.users.password = data3.value;
    BMI_serialized = JSON.stringify(BMI.users);
    localStorage.setItem(data2.value, BMI_serialized);
    BMI_deserialized = JSON.parse(localStorage.getItem(data2.value));
    console.log(localStorage);
    console.log(BMI_deserialized);
};
loginbutton = document.getElementById("submitform1");
loginemail = document.getElementById("loginemail");
loginpassword = document.getElementById("loginpassword");
loginbutton.addEventListener('click', loginSend);
function loginSend() {
    if (loginpassword.value == JSON.parse(localStorage.getItem(loginemail.value)).password) {
        alert("Login Successful !")
    };
    useraccount = document.getElementById("section5");
    useraccount.innerHTML = `<button id="logout" name="Đăng xuất" onclick="logout()">Logout</button>`;
};

function logout(){
    window.location.assign("file:///C:/Users/Admin/Desktop/My%20website-20200919T153852Z-001/My%20website/index.html")
};

var loginbutton = document.getElementById("submitform1");
var loginemail = document.getElementById('loginemail');
var loginpassword = document.getElementById('loginpassword');
loginbutton.addEventListener('click', updateData1);
function updateData1() {
    var listUser = JSON.parse(localStorage.getItem(`userAdmin`));
    if (listUser.isAdmin && listUser.email == loginemail.value && listUser.password == loginpassword.value) {
        console.log(listUser);
        alert("Đăng nhập thành công");
        window.location.href = "/table.html";
    }
};

