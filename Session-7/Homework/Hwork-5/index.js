window.onload = function () {
    var thediv = document.getElementsByClassName('singer'); // hàm lấy thẻ ul đầu tiền trong html
    var thedivcontent = thediv[0].textContent; // lấy text của thẻ li
    alert(thedivcontent);
    for (let i = 0; i < thediv.length; i++) {
        var thedivcontent = thediv[i].textContent;
        console.log(thedivcontent)
    }
};
