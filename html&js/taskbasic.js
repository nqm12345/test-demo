const desc = "Ô tk rừng ko biết ăn rồng à";

function lengthDesc(str) {
  const noSpace = str.replace(/\s/g, "");
  console.log(`Đây là chuỗi sau khi bỏ space: ${noSpace}`);
  console.log("Đây là độ dài của chuỗi khi bỏ space:", noSpace.length);
}

lengthDesc(desc);

const cmt = "xin chào mọi người";

function toupperCaseCmt(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
console.log(toupperCaseCmt(cmt));

// Đếm xem chuỗi có bao nhiêu kí tự số
const test = "Jack J97";
const digits = test.replace(/[^0-9]/g, "");
console.log(digits);
console.log(digits.length);

// Nhập số nguyên n  viết hàm
function sumToN(n) {
  if (!Number.isInteger(n)) {
    return "Vui lòng nhập số nguyên";
  }
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
    // 0 + 1
    // 1 + 2
    // 3 + 3
    // 6 + 4
    // 10 + 5
  }
  return sum;
}
const result = sumToN(5324);
console.log(`Tổng từ 1 -> 5 là: ${result}`);
console.log("Có phải là số nguyên không:", Number.isInteger(result));
console.log(result.toLocaleString("en-Us"));   


// Bài 2:

const arr = [3, 7, 2, 9, 1];

// Tìm số lớn nhất và nhỏ nhất 
console.log(Math.max(...arr));
console.log(Math.min(...arr));

// Tính trung bình cộng

const sumArr = arr.reduce(data, index) 



