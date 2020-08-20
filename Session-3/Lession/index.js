alert("Initialize an array named movies containing the titles of some of your favorite movies");
let menu = ['Người Nhện', 'Công chúa Ngủ trong Rừng', 'gà rừng'];
console.log(menu);
alert("Add new item named newMovie into the end of the movies array you initialized, newMovie entered by users");
menu.push('fast and furrious');
console.log(menu);
let newItem = prompt ('Enter newMovie:');
menu.push(newItem);
console.log(menu);
let i = prompt ('Enter i:');
console.log(menu[i]);

(menu[0])= prompt('Nhập tên phim:')
console.log(menu);
let i = prompt("Enter")
menu.splice(i, 2);
console.log(menu);