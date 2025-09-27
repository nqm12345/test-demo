

// 1. Chia mảng thành các mảng nhỏ theo kích thước chỉ định
var a = _.chunk([1, 2, 3, 4, 5, 6], 3);
console.log(a);

// 2. Xóa các phần tử có giá trị là falsy
var b = _.compact([1, 0, 2, null]);
console.log(b);

// 3. Lấy các phần tử trong mảng nhưng không có trong value
var c = _.difference([1, 2], [1]);
console.log(c);

// 4. Trả về mảng và loại bỏ phần tử chỉ định
var d = _.without([1, 2, 3, 4], 1, 3);
console.log(d);

// 5. Xóa phần tử theo điều kiện
var arr = [1, 2, 3, 4, 5, 6];
_.remove(arr, u => u % 2 === 0);
console.log(arr);

// 6. Làm phẳng mảng 1 cấp và nhiều cấp
var e = _.flatten([1, [2, [3, [4]]]]);
console.log(e)

var f = _.flattenDeep([1, [2, [3, [4]]]]);
console.log(f);

// 7. Nối các phần tử với mảng và mảng khác
var g = _.concat([1], [2]);
console.log(g);

// 8. Ghép các mảng theo index và ngược lại
let h = _.zip(["a", "b"], [1, 2], [true, false]);
console.log(h); 

let i = _.unzip([["a", 1, true], ["b", 2, false]]);
console.log(i);

// 9. Lấy các phần tử chung của các mảng
let k = _.intersection([1, 2, 3, 4], [2, 1]);
console.log(k);

// 10. Loại bỏ các phần tử trùng lặp
let n = _.uniq([1, 2, 3, 2, 4, 5, 5]);
console.log(n);

