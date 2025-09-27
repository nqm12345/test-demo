var person = {
    name: "Anh B",
    age: 20,
    city: "Hà Nội"
};

var bopbop = {
    cmt: "Thế thì chịu",
    desc: "Phải chịu"
};

// Truy cập
console.log(person.name);
console.log(person["age"]);

// Thêm thuộc tính
person.job = "developer";
console.log(person);

// Xóa thuộc tính
delete person.city;
console.log(person);

// Duyệt object
for(let key in person) {
    console.log(key, person[key])
};

// kiểm tra có key không
console.log("name" in person);
console.log(person.hasOwnProperty("age"));

// Lấy ra tất cả keys/ values
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

// Gộp mảng

var newObject = {...person, ...bopbop};
console.log(newObject);

