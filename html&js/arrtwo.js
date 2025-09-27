let number = [1, 2, 3, 4, 5, 6];

// Độ dài
console.log(number.length);

// Thêm / xóa mảng
number.push(7); // Thêm cuối mảng
console.log(number);
number.pop(); // Xóa cuối mảng
console.log(number);
number.shift(); // Xóa đầu mảng
console.log(number);
number.unshift(0); // Thêm đầu mảng
console.log(number);

// Biến thành chuỗi
console.log(number.toString());
console.log(number.join(" - "));

// Sắp xếp / đảo ngược
console.log(number.sort());
console.log(number.reverse());

// Duyệt mảng 
number.forEach(item => console.log(item));

let mapNumber =  number.map(n => n * 10);
console.log(mapNumber);

let filtered = number.filter(n => n > 0);
console.log(filtered);

let sum = number.reduce((acc, val) => acc + val);
console.log("reduce (tổng):", sum);

// Tìm kiếm 
console.log(number.indexOf(2));
console.log(number.includes(6));
console.log(number.sort().find(n => n > 5));
console.log(number.findIndex(n => n > 5));

// Cắt mảng
console.log(number.slice(0, 2));

// Thay nội dung mảng
number.splice(1, 2, 99);
console.log(number);


