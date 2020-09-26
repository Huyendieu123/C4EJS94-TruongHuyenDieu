
window.onload = function () {
    let body = document.getElementById('ts_tbody');
    let i = 0;
    for (var a in localStorage) {
        if (a != 'length') {
            console.log(a, ' = ', localStorage[a]);
            var listUser = null;
            try {
                listUser = JSON.parse(localStorage[a]);
            } catch (error) { }
            if (listUser != null && !listUser.isAdmin) {
                var row = body.insertRow(i);
                row.insertCell(0).innerHTML = listUser.name;
                row.insertCell(1).innerHTML = listUser.email;
                row.insertCell(2).innerHTML = '<button class="button_delete">X</button>'
                    + '<button class="button_update">U</button>';
                i++;
            }
        }
    }
}