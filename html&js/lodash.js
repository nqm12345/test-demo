// Các hàm Lodash thường dùng cho mảng
// 1. _.chunk(arr, size)
// Chia mảng thành các mảng con theo kích thước chỉ định

const result = _.chunk([1, 2, 3, 4, 5], 2);
console.log(result);

// compact(arr) loại bỏ các giá trị falsy
const resultTwo = _.compact([1, 0, NaN, 2, "", 3, undefined, 4]);
console.log(resultTwo)


// _.concat nối mảng với các phần tử khác/ arr
const resultThree = _.concat([1], [2], [3,  [4]]);
console.log(resultThree);

// _.difference(arr, values) Lấy các phần tử có trong array nhưng không có trong values;
const resultFour = _.difference([1, 2, 3], [3, 4]);
console.log(resultFour);

// _uniq([1, 2, 2, 3, 4, 5]); loại bỏ phần tử trùng lặp
const resultFive = _.uniq([1, 2, 2, 3, 4, 5]);
console.log(resultFive);

// _.flatten(arr) và _.flattenDeep(arr) Làm phẳng mảng 1 cấp hoặc nhiều cuối;
const resultSix = _.flatten([1, [2, [3, [4]]]]);
console.log(resultSix);

const resultSeven = _.flattenDeep([1, [2, [3, [4]]]]);
console.log(resultSeven);

// 7. _.intersection(...arrays) Lấy phần tử chung của các mảng.
const bopbop = _.intersection([2, 1], [2, 3]);
console.log(bopbop);

// 8. _.without(array, ...values) Trả về mảng loại bỏ các giá trị chỉ định.
const vmcuong =  _.without([1, 2, 1, 3],1, 2);
console.log(vmcuong);

// 9. _.zip([...arrays]) và _.unzip(array) Ghép các mảng lại theo index, hoặc ngược lại.
const lymattroi = _.zip(['a', 'b'], [1, 2], [true, false]);
console.log(lymattroi);

const lymattroi2 = _.unzip([['a', 1, true], ['b', 2, false]]);
console.log(lymattroi2);

// 10. _.remove(arr.predicate) Xóa phần tử theo điều kiện

const arr = [1, 2, 3, 4];
_.remove(arr, n => n % 2 === 0);
console.log(arr);

