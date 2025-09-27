// Bộ đề 1: Quản lý học sinh
const students = [
  { id: 1, name: "Nam", age: 18, score: 7.5 },
  { id: 2, name: "Hoa", age: 19, score: 8.2 },
  { id: 3, name: "Tuấn", age: 18, score: 6.9 },
];

// Viết hàm tính điểm chung bình của cả lớp
function diemTB(students) {
  const tong = students.reduce((sum, student) => sum + student.score, 0);
  return tong / students.length;
}
console.log(diemTB(students));

// Thêm mới học sinh

function AddStudent(newStudent) {
  const { name, age, score } = newStudent;
  if (!name || !age || !score) {
    return `Vui lòng nhập đủ dữ liệu`;
  }
  newStudent.id = students.length + 1;
  students.push(newStudent);
  return `Thêm học sinh mới thành công: ${JSON.stringify(newStudent)}`;
}

const dataStudent = { id: 3, name: "Thế thì chịu", age: 20, score: 9.8 };
const studentAdd = AddStudent(dataStudent);
console.log(studentAdd);
console.log("Danh sách học sinh:", students);

// Xóa học sinh theo id

function deleteStudent(id) {
  const index = students.findIndex((item) => item.id === id);
  if (index !== -1) {
    const deleted = students[index];
    students.splice(index, 1);
    return {
      message: `Xóa học sinh thành công: ${JSON.stringify(deleted)}`,
    };
  } else {
    return {
      deleted: "Không có id nào như vậy",
    };
  }
}
console.log(deleteStudent(2));
console.log(students);

// Viết hàm tìm học sinh có điểm cao nhất

function scoreBig() {
  const searchScore = students.reduce((max, current) => {
    return current.score > max.score ? current : max;
  });
  return `Học sinh có điểm cao nhất là: ${JSON.stringify(searchScore)}`;
}
console.log(scoreBig());

// Viết hàm in ra danh sách học sinh dưới danh chuỗi

function displayStudent(student) {
  return student
    .map((item) => `${item.name} (${item.age}t - ${item.score})`)
    .join(" | ");
}
console.log(displayStudent(students));
