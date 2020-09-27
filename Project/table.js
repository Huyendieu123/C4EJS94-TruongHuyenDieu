
window.onload = function () {
    reload ();
    function reload() {
        let arrayUser = [];
        let body = document.getElementById('ts_tbody');
        body.innerHTML = "";
        let i = 0;
        for (var a in localStorage) {
            if (a != 'length') {
                console.log(a, ' = ', localStorage[a]);
                var listUser = null;
                try {
                    listUser = JSON.parse(localStorage[a]);
                } catch (error) { }
                if (listUser != null && !listUser.isAdmin) {
                    arrayUser.push(a);
                    var row = body.insertRow(i);
                    row.insertCell(0).innerHTML = listUser.name;
                    row.insertCell(1).innerHTML = listUser.email;
                    row.insertCell(2).innerHTML = '<button class="button_delete">X</button>'
                        + '<button class="button_update">U</button>';
                    i++;
                }
            }
        }

        let btnDelete = document.getElementsByClassName('button_delete');
        for (let i = 0; i < btnDelete.length; i++) {
            btnDelete[i].addEventListener('click', () => {
                localStorage.removeItem(arrayUser[i]);
                reload();
            });
        }
        let btnUpdate = document.getElementsByClassName('button_update');
        for (let i = 0; i < btnUpdate.length; i++) {
            btnUpdate[i].addEventListener('click', () => {
                window.location.href = "/edituser.html?data="+arrayUser[i];
            });
        }
    }
}