const users = [
  { id: 1, name: "An", role: "admin", age: 30 },
  { id: 2, name: "Bình", role: "user", age: 22 },
  { id: 3, name: "Chi", role: "user", age: 25 },
  { id: 4, name: "An", role: "admin", age: 30 }, // duplicate
];

// Lấy tên của tất cả user

const names = _.map(users, "name");
console.log(names);

// Lọc ra các user có tuổi > 22

const filtered = _.filter(users, u => u.age > 22);
console.log(filtered);

// Tìm các user có role là admin
const findRole = _.find(users, {id: 1});
console.log(findRole);

// loại bỏ user trùng name và role

const deleteUser = _.uniqBy(users, u => `${u.name} - ${u.role}`);
console.log(deleteUser);

// Xóa user có role là admin 

const removeRole = [...users];
_.remove(removeRole, p => p.role === "admin");
console.log(removeRole);


// includes , kiểm tra id có tồn tại hay không
const idList = _.map(users, "id");
console.log(_.includes(idList, 2));

// 
const sorted = _.orderBy(users, ["age"], ["desc"]);
console.log(sorted.map(u => u.name));


///  _.difference → id có trong A mà không có trong B

const dbIds = [1, 2, 3, 4];
const requestIds = [2, 4];

console.log(_.difference(dbIds, requestIds));

// Lấy các phần tử chung của 2 mảng

const allowed = [1, 2, 3];
const current = [2, 3, 5];
console.log(_.intersection(allowed, current));

// Làm phẳng mảng lồng nhau 
const nested = [[1, [2, [3, [4]]]]];
console.log(_.flattenDeep(nested));





