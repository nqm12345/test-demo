const users = [
    {
        id: 1,
        name: "nguyen van a",
        email: "nva@gmail.com"
    },
        {
        id: 2,
        name: "nguyen van b",
        email: "nvb@gmail.com"
    },
        {
        id: 3,
        name: "nguyen van c",
        email: "nvc@gmail.com"
    },
];

// Tìm kiếm user theo tên và email
const keyworld = "nva@gmail.com";
const result = _.filter(users, (u) => 
    u.name === keyworld || u.email === keyworld
);
console.log(result);

//  Format tên người dùng viết hoa chữ cái đâu 
const nameUpperCase = _.map(users, u => ({
    ...u,
    name: _.capitalize(u.name)
}));
console.log("Viết hoa chữ cái đầu:", nameUpperCase);

// Xóa user
const removeUser = [...users];
_.remove(removeUser, p => p.id === 1);
console.log("Xóa:", removeUser);

// Thêm
users.push({id: 4, name: "nguyen van e", email: "nve@gmail.com"});
console.log(users);


