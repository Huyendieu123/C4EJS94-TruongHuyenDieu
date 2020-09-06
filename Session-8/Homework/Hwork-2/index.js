let count = 5;
let interval;
document.getElementById('button1').addEventListener('click', function () {
    var value = document.getElementById('nhapso').value;
    if (value != 0) {
        count = Number(value);
    }
    interval = setInterval(function () {
        count--;
        document.getElementById('giatri').innerHTML = count;
    }, 1000);

});

document.getElementById('button2').addEventListener('click', function () {
    clearInterval(interval);
});
