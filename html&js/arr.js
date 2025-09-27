let arr = [10, 20, 30, 40, 50];

// Độ dài
console.log(arr.length);

// Thêm / xóa
arr.push(50); // thêm cuối
console.log(arr);
arr.pop(); // xóa cuối
console.log(arr);
arr.shift(); // xóa đầu
console.log(arr);
arr.unshift(5); // thêm đầu
console.log(arr);

// Cắt mảng
console.log(arr.slice(0, 3));

// Thay thế mảng
arr.splice(8,10, 99);
console.log(arr);

// Tìm kiếm 
console.log(arr.indexOf(50)); // trả về vị trí index của số nhập và số đó phải tròn trong mảng
console.log(arr.includes(99));
console.log(arr.find(n => n > 10)); // (phần tử ĐẦU TIÊN thỏa điều kiện n > 10)
console.log(arr.findIndex(n => n > 30));
console.log(arr);

// Duyệt mảng
console.log("forEach:");
arr.forEach(item => console.log(item));

let doubled = arr.map(n => n * 2);
console.log("map (nhân đôi):", doubled);

let filtered = arr.filter(n => n > 50);
console.log("filter:", filtered);

let sum = arr.reduce((a, b) => a + b);
console.log("Tổng:", sum);

// sắp xếp
let numbers = [5, 2, 9, 1, 8];
console.log(numbers.sort());
console.log(numbers.sort((a, b) => a - b));
console.log(numbers.reverse());

// Biến đổi thành chuỗi
console.log(arr.toString());
console.log(arr.join(" - "))



