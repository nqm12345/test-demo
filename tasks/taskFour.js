const orders = [
  { id: 1, customer: "Nam", total: 1500000, status: "pending" },
  { id: 2, customer: "Hoa", total: 2000000, status: "completed" },
  { id: 3, customer: "Tuấn", total: 500000, status: "pending" },
];

//•	Viết hàm tính tổng doanh thu (chỉ tính status = "completed").
// Cách 1 dùng hàm for
function getRevenus(orders) {
    let total = 0;
    for(let i = 0; i < orders.length; i++) {
        if(orders[i].status === "completed") {
            total += orders[i].total;
        }
    }
    return total;
};
console.log(getRevenus(orders));