// function hw(name, cmt) { // khai báo function
//     alert(' Hello word ' + name + cmt)
// }
// let a = prompt('Nhập tên');
// let b = prompt('comment')
// // hw(a,b);

// let x = hw;
// x(a,b);


function sayHi(name) {
    alert('Hi' + name);
}

function sayGoodBye(name) {
    alert('Goodbye' + name);
    
}

function testSay(f) {
    let name = prompt();
    alert('Here I say');
    f(name); //hàm callback
}
// testSay('Sayhi');
testSay(sayGoodBye);

//có thể viết tắt function bằng 
