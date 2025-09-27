let number = 56.789;

// Làm tròn
console.log(Math.floor(number)); // Làm tròn nhỏ
console.log(Math.round(number)); // Làm gần nhất
console.log(Math.ceil(number)); // Làm tròn lớn

// Biến số thành chuỗi
console.log(number.toString());

// Biến số thành chuỗi nhưng lấy số nguyên
console.log(Math.trunc(number).toString());

// Giữ số thập phân
console.log(number.toFixed(0));

// Ép chuỗi thành số 
console.log(Number.parseInt("56.9088"));
console.log(Number.parseFloat("56.455"));
console.log(Number("56"));

// Số lớn nhất và nhỏ nhất
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// Lấy ra số lớn nhất và nhỏ nhất của object/arr
console.log(Math.max(number));
console.log(Math.min(number));

// Random
console.log(Math.floor(Math.random() * 10));

// 
console.log(Number.isNaN(NaN));
console.log(Number.isInteger(3));// Kiểm tra phải là số nguyên thì là true





