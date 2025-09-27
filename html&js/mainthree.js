let str = "  Thế thì chịu chịu  ";

// Độ dài 
console.log(str.length);

// Loại bỏ khoảng trắng đầu và cuối
console.log(str);
console.log(str.trim());

// Thay thế văn bản
console.log(str.replace("chịu", "ok"));

// Cắt chuỗi
console.log(str.slice(0, 10));

// Tách chuỗi thành mảng
console.log(str.split(" "));

// Kiểm tra có giá trị đó hay ko
console.log(str.includes("thì"));

// Tìm kiếm văn bản đầu và cuối
console.log(str.trim().startsWith("Thế"));
console.log(str.trim().endsWith("chịu"));

// Tìm vị trí 
console.log(str.trim()[0]);

// Tìm kiếm nâng cao
console.log(str.match(/chịu/g));

// Nối chuỗi
console.log(str.concat("Phải lm j"));

// Tìm vị trí đầu tiên/ cuối xuất hiện
console.log(str.indexOf("chịu"));
console.log(str.lastIndexOf("chịu"));

// Viết hoa viết thường
console.log(str.toUpperCase()); // Viết hoa
console.log(str.toLowerCase()); // Viết thường

// Lặp chuỗi
console.log(str.repeat(2));


