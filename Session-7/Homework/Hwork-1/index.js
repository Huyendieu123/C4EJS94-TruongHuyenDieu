window.onload = function () { // kiem tra trang web đã load done
    const container = document.getElementById("list"); // tìm vị trí trên html có id=list
    for (let i = 0; i < 3; i++) {
        container.insertAdjacentHTML('beforebegin', `<li>${i}</li>`); 
        container.insertAdjacentHTML('afterbegin', `<li>${i}</li>`);
        container.insertAdjacentHTML('beforeend', `<li>${i}</li>`);
        container.insertAdjacentHTML('afterend', `<li>${i}</li>`);
        document.getElementById('list').innerHTML = "Chào mừng các bạn đến với website học lập trình online "
    }
};
// insertAdjacentHTM() Hàm dùng để thêm text vào html có vị trí list
// getElementById('list').innerHTML: update hoàn toàn text mới vào html có vị trí id = list