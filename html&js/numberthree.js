let number = 46.789;

// Làm tròn
console.log(Math.floor(number)); // Làm tròn xuống
console.log(Math.round(number)); // Làm tròn gần nhất
console.log(Math.ceil(number)); // Làm tròn lên

// Biến số thành chuỗi
console.log(number.toString());

// Ép chuỗi thành số
console.log(Number.parseInt("100")); // Lấy số nguyên
console.log(Number.parseFloat("100.908")); // Lấy số thập phân
console.log(Number("100.546")); 

// In ra số lớn nhất
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// In ra số lớn nhất/ nhỏ nhất trong object/ arr
console.log(Math.max(number));
console.log(Math.min(number));

// Random
console.log(Math.floor(Math.random() * 10));

// Kiểm tra có phải là số nguyên ko
console.log(Number.isInteger(45)); // phải là number và là số nguyên

// Kiểm tra NaN
console.log(Number.isNaN(NaN));

// Giữ số thập phân
console.log(number.toFixed(1));

// Biến số thành chuỗi nhưng lấy ra số nguyên
console.log(Math.trunc(number).toString());




