const products = [
  { id: 1, name: "Aó thun", price: 150000, quantity: 2 },
  { id: 2, name: "Aó cộc", price: 190000, quantity: 5 },
  { id: 3, name: "Aó khoác", price: 120000, quantity: 10 },
];

// Tính tổng tiền giỏ hàng
const sumProduct = products.reduce((tong, sanpham) => {
  return tong + sanpham.price;
}, 0);
console.log("Tổng giá trị của các sản phẩm là:", sumProduct);

// Xóa sản phẩm

function deleteProduct(id) {
  const index = products.findIndex((u) => u.id === id);
  if (index !== -1) {
    const deleted = products[index];
    products.splice(index, 1);
    return {
      deleted,
      products,
    };
  } else {
    return {
      deleted: "Ko có id nào như vậy",
      message: "Xóa sản phẩm thất bại",
    };
  }
}
console.log(deleteProduct(1));

// Thêm sản phẩm

function AddProduct(newProduct) {
  const ids = products.map((u) => u.id);
  if (ids.includes(newProduct.id)) {
    newProduct.id++;
  }
  products.push(newProduct);
  return newProduct;
}

const add = { id: 3, name: "Áo giữ nhiệt", price: 240000, quantity: 30 };
const productAdd = AddProduct(add);
console.log("Thêm sản phẩm mới thành công:", productAdd);
console.log(products);

//

function displayCart(cart) {
  return cart.map(
    (item) => `${item.quantity * item.price} x ${item.name} - ${item.price / 1000}k`
  ).join(" | ")
}
console.log(displayCart(products));


