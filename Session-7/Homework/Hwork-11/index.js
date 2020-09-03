function upperjs() {
    console.log('Your Upper it!! Just clicked');
    var a = document.getElementById("inputname").value;
    console.log(a);
    console.log(a.toUpperCase());
    document.getElementById('result-div').innerHTML = a.toUpperCase();
}