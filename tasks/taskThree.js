const employees = [
  { id: 1, name: "An", salary: 8000000, position: "Developer" },
  { id: 2, name: "Bình", salary: 10000000, position: "Designer" },
  { id: 3, name: "Chi", salary: 12000000, position: "Manager" },
]; 

// Tính tổng lương của tất cả nhân viên

function sumSalary(employees) {
    const tong = employees.reduce((sum, dataDb) => sum + dataDb.salary, 0);
    return tong;
};
console.log(sumSalary(employees));

// Tìm nhân viên có mức lương cao nhất
function salaryBig() {
    let max = 0;
    for (const employe of employees) {
        if(employe.salary > max) {
            max = employe.salary
        }
    }
    return max
}
console.log('max', salaryBig());

// Viết hàm thêm nhân viên

function AddEmployees(newEmployees) {
    const {name, salary, position} = newEmployees;
    if(!name | !salary | !position) {
        return `Vui lòng nhập dữ liệu đầy đủ`
    }
    let newId = 1;
    while (employees.some((emp) => emp.id === newId)) {
        newId++;
    
    } 
    const employeeWithId = {id: newId, ...newEmployees};
    employees.push(employeeWithId);
    return `Thêm sản phẩm mới thành công: ${JSON.stringify(employeeWithId)}`;
};

const data = {name: "Vân", salary: 17000000, position: "Manager"};

const dataEmployees = AddEmployees(data);
console.log(dataEmployees);
console.log(employees);

// Viết hàm lọc nhân viên theo chức vụ (position)
function filterPosition(position) {
    const filted = employees.filter((u) => u.position === position);
    if(filted.length === 0) {
        return `Không có nhân viên nào có chức vụ như viên: ${position}`;
    }
    return `Các nhân viên có chức vụ ${position}: ${JSON.stringify(filted)}`
}
console.log(filterPosition("Developer"));

// 
function listEmployees(list) {
    return list.map((item) => 
    `${item.name} - ${item.position} (${item.salary /1000000}tr)`
).join(" | ")
};

console.log(listEmployees(employees));