alert("Split String into Array");
alert("Phương thức string.split() sẽ phân tách một chuỗi thành một mảng dữ liệu dựa vào các kí tự phân cách trong chuỗi. Phương thức sẽ trả về một mảng mới");
//  hàm: string.split([separator][, limit]); trong đó: separator − Xác định ký tự sử dụng để chia chuỗi đó.
// limit − Số integer xác định một giới hạn về số các phần chia.
let s = 'Hello beauty there';
let a = Array(s);
let x = s.split(" ");
alert(x);