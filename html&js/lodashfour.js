const users = [
  { id: 1, fullName: "   nguyễn văn an   ", role: "admin" },
  { id: 2, fullName: "Trần thị Bình", role: "user" },
];

// 1. _.camelCase → chuyển tên cột/field thành camelCase
const dbField = "user_name";
const camel = _.camelCase(dbField);
console.log(camel);

// 2. _.kebabCase → tạo slug cho URL
const productName = "Iphone 17 pro max";
const slug = _.kebabCase(productName);
console.log(slug);

// 3. _.snakeCase → chuyển sang snake_case để lưu DB
const apiField = "User Email Address";
console.log(_.snakeCase(apiField));

// 4. _.startCase → hiển thị đẹp trên UI
const role = "superAdmin";
console.log(_.startCase(role));

// 5. _.capitalize → viết hoa chữ cái đầu
const name = "minh";
console.log(_.capitalize(name));
// 6. _.lowerCase / _.upperCase → chuẩn hoá string để so sánh
const roleFromDb = "ADMIN";

const roleInput = "admin";

if (_.lowerCase(roleFromDb) === _.lowerCase(roleInput)) {
  console.log("Role match!"); // ✅
}

// 7. _.trim / _.trimStart / _.trimEnd → xử lý input
const rawName = users[0].fullName;
console.log(`Trước: ${rawName}`);
console.log("Sau:", _.trim(rawName));
