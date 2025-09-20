// Các kiểu dữ liệu

// 1. String(chuỗi văn bản)

let str = "Thế thì phải chịu";
// Độ dài
console.log(str.length);

// Lấy ký tự
console.log(str[1]);

// Viết hoa/ thường
console.log(str.toUpperCase()); // Viết hoa
console.log(str.toLowerCase()); // Viết thường

// Cắt chuỗi
console.log(str.slice(0, 7));

// Kiểm tra chứa
console.log(str.includes("thì"));// true

// Thay thế
console.log(str.replace("chịu", ", phải làm sao?")); // Thay thế văn bản 

// Loại bỏ khoảng trắng đầu và cuối chuỗi
console.log(str.trim()); // "JavaScript là tuyệt vời!"

// Tách chuỗi thành mảng
console.log(str.trim().split(" "));


// 2. Number (số)

let number = 42.678;

// Làm tròn
console.log(Math.round(number));
console.log(Math.floor(number));
console.log(Math.ceil(number));

// Căn bậc 2
console.log(Math.sqrt(16));

// Lũy thừa
console.log(Math.pow(2,  4));

// Ngẫu nhiên (0 -> 1)
console.log(Math.random());

// Chuyển số thành chuỗi
console.log(number.toString());

// Lấy số chữ số thập phân
console.log(number.toFixed(2));


// 3. Boolean (đúng / sai)
let isAdmin = true;
let isLoggedIn = false;

// Kiểm tra kiểu
console.log(typeof isAdmin);

// Chuyển giá trị về boolean
console.log(Boolean("")); // false
console.log(Boolean(0)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('')); // false
console.log(Boolean(-0)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean("1")); // true

// 4. Object

let obJect = {
    name: 'Minh',
    age: 21,
    city: "Hà Nội"
};
// Truy cập lấy value
console.log(obJect.name)
console.log(obJect.age)
console.log(obJect["city"]);

// Thêm thuộc tính
obJect.job = "TTS Back - end";
console.log(obJect)
// Xóa thuộc tính
delete obJect.city;
console.log(obJect);

// Duyệt object
for (let key in obJect) {
  console.log(key, obJect[key]);
}

// Lấy tất cả key/ value
console.log(Object.keys(obJect)); // Lấy ra tất cả key
console.log(Object.values(obJect)); // Lấy ra tất cả value
console.log(Object.entries(obJect)); // Lấy ra tất cả key và value

// 5. Arr (Mảng)

let arr = [
    10, 20, 30, 40, 50
];

// Độ dài
console.log(arr.length);

// Thêm / xóa
arr.push(60); // Thêm cuối mảng
console.log(arr);

arr.pop(); // xóa cuối mảng
console.log(arr);

arr.shift(); // xóa đầu mảng
console.log(arr);

arr.unshift(5); // Thêm đầu mảng
console.log(arr);

console.log(arr.slice(0, 3));// Cắt mảng

console.log()















