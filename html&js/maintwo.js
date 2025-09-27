let str = "  Thì phải làm sao sao ";

// Kiểm tra độ dài chuỗi
console.log(str.length);

// Cắt chuỗi
console.log(str.slice(0, 10));

// Loại bỏ khoảng trắng đầu và cuối 
console.log(str.trim());

// Thay thế văn bản
console.log(str.replace("làm sao", "chịu"));    

// Tách chuỗi thành mảng
console.log(str.trim().split(" "));

// Nối chuỗi 
console.log(str.trim().concat(" bốp"));

// Chuyển thành chữ hoa/ thường
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// Tìm kí tự 
console.log(str.trim()[0]);

// Kiểm tra có chứa ký tự hay ko 
console.log(str.includes("phải"));

// Tìm vị trí đầu tiên/ cuối xuất hiện
console.log(str.indexOf("sao"));
console.log(str.lastIndexOf("sao"));

// Lặp chuỗi
console.log(str.trim().repeat(2));

// Kiểm tra chuỗi bắt đầu và kết thúc với đoạn chuỗi nào đó
console.log(str.trim().startsWith("Thì"));
console.log(str.trim().endsWith("sao"));

// Tìm kiếm nâng cao
console.log(str.match(/sao/g));
