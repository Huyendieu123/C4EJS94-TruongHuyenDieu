window.onload = function () {
    var theUL = document.getElementsByTagName('ul')[0]; // hàm lấy thẻ ul đầu tiền trong html
    var child1 = theUL.children[1]; // the con của ul là thẻ li
    var textCuaChild1 = child1.textContent; // lấy text của thẻ li
    alert(textCuaChild1);
    for (let i = 0; i < theUL.childElementCount; i++) {
        var childi = theUL.children[i]; // the con của ul là thẻ li
        var textCuaChildi = childi.textContent;
        console.log(textCuaChildi)
    }
};
