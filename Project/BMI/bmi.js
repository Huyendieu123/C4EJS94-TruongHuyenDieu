let we = document.getElementById ('we') //cân nặng width
let he = document.getElementById ('he') //chiều cao height
let su = document.getElementById ('su') //nút submit
let rs = document.getElementById ('rs') //div trả về result
 

    su.addEventListener('click', function () {
        bmi = Number(we.value) / Number((he.value / 100) * (he.value / 100));

    if (bmi < 16) {
        rs.innerHTML = 'You are severely underweight, you need to meet a doctor';
    } else if (bmi < 18.5) {
        rs.innerHTML = 'You are underweight, you need to weight gain';
    } else if (bmi < 25) {
        rs.innerHTML = 'You are normal, keep your weight and increase your muscle';
    } else if (bmi < 30) {
        rs.innerHTML = 'You are overweight, you need to weight lose';
    } else {
        rs.innerHTML = 'You are obese, you need to meed a doctor ';
    }
})


