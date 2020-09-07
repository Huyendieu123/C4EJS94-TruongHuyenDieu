let count = 5;
let interval;
let s = document.getElementById('button1');

// s.addEventListener('click', function () {
//     var value = document.getElementById('nhapso').value;
//     let interval = setInterval(function () {
//         if (value != 0) {
//             count = Number(value);
//             count--;
//             document.getElementById('giatri').innerHTML = count;
//         }
//     }, 1000)}
// );


let x = document.getElementById('button2');

x.addEventListener('click', function () {
    clearInterval(interval);
});

s.addEventListener('click', function() {
    var value = document.getElementById('nhapso').value;
    let interval = setInterval(() => {
        count = Number(value);
        count --;
        document.getElementById('giatri').innerHTML=count;
        console.log(count);

        if(value<0) {
            clearInterval(interval);
        }
    }, 1000);
})