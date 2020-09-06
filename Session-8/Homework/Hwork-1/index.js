let count = 0;
document.getElementById('button1').addEventListener('click', function () {
    count++;
    document.getElementById('giatri').innerHTML = count;
});

document.getElementById('button2').addEventListener('click', function () {
    count--;
    document.getElementById('giatri').innerHTML = count;
});