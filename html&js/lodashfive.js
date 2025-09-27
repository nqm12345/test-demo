const users = [
  { id: 1, fullName: "   nguyễn văn an   ", role: "admin" },
  { id: 2, fullName: "Trần thị Bình", role: "user" },
];

// 1. _.camelCase -> chuyển đổi tên cột/field thành camelCase
const a = "user_name";
console.log(_.camelCase(a));

// 2. _.kebabCase → tạo slug cho URL
const b = "Iphone 17 pro max";
console.log(_.kebabCase(b));

// 3. _.snakeCase → chuyển sang snake_case để lưu DB
const c = "User Email Address";
console.log(_.snakeCase(c));

// 4. _.startCase → hiển thị đẹp trên UI
const d = "userAdmin";
console.log(_.startCase(d));

// 5. _.capitalize → viết hoa chữ cái đầu
const e = "minh";
console.log(_.capitalize(e));

// 6. chuẩn hóa String để so sánh
const f = "HELLO";
const g = "hello";

if(_.lowerCase(f) === _.lowerCase(g)) {
  console.log("Xin chào tất cả mọi người");
}

// 7. _.trim / _.trimStart / _.trimEnd → xử lý input
const h = "nguyen van sikibidi";
const i = "    nguyen van sikibidi   ";
console.log(_.trim(i));


