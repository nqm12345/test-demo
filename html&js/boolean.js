let isAdmin = true;
let isLoggedIn = false;

// Kiểm tra kiểu
console.log(typeof isAdmin);
console.log(typeof isLoggedIn);

// Chuyển giá trị về boolean
console.log(Boolean(""));
console.log(Boolean(''));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(1));

// Ép kiểu boolean nhanh bằng !!
console.log(!!"Hello");
console.log(!!0);

// Toán tử logic thường dùng với boolean (rất quan trọng):
console.log(isAdmin && isLoggedIn);
console.log(isAdmin || isLoggedIn);
console.log(!isAdmin);

// So sánh
console.log(5 > 3);
console.log(5 === 3);




