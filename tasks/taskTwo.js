const books = [
  {
    id: 1,
    title: "Harry Potter",
    author: "J.K. Rowling",
    price: 120000,
    quantity: 3,
  },
  {
    id: 2,
    title: "Doraemon",
    author: "Fujiko Fujio",
    price: 50000,
    quantity: 5,
  },
  {
    id: 3,
    title: "Sherlock Holmes",
    author: "Arthur Conan Doyle",
    price: 80000,
    quantity: 2,
  },
    {
    id: 4,
    title: "Doraemon 2",
    author: "Fujiko Fujio",
    price: 80000,
    quantity: 2,
  },
];

// Viết hàm tính tổng sách trong thư viện

const sumBook = books.reduce((tong, priceBokk) => {
  return tong + priceBokk.price;
}, 0);
console.log(sumBook);

// Viết hàm thêm sách nếu trùng id thì công thêm số lượng

function AddBook(newBook) {
  const ids = books.map((u) => u.id);
  const { title, author, price, quantity } = newBook;
  if (ids.includes(newBook.id)) {
    newBook.id++;
  }

  if (!title || !author || !price || !quantity) {
    return `Vui lòng nhập đầy đủ dữ liệu`;
  }
  books.push(newBook);
  return `Thêm sách mới thành công: ${JSON.stringify(newBook)}`;
}

const dataBook = {
  id: 4,
  title: "One Puch Man",
  author: "Hello",
  price: 100000,
  quantity: 5,
};

const dataGan = AddBook(dataBook);
console.log(dataGan);
console.log(books);

// Xóa sách theo id

function deleteBook(id) {
  const index = books.findIndex((u) => u.id === id);
  if (index !== -1) {
    const deleted = books[index];
    books.splice(index, 1);
    return `Xóa sản phẩm ${JSON.stringify(deleted)}`;
  } else {
    return {
      message: `Không có id sản phẩm nào là: ${id}`
    }
  }
}
console.log(deleteBook(1));
console.log(books);

function findBooksByAuthor(authorName) {
  // lọc những quyển có author trùng với authorName
  const result = books.filter((book) => book.author === authorName);

  // nếu không tìm thấy quyển nào
  if (result.length === 0) {
    return `Không tìm thấy sách nào của tác giả "${authorName}"`;
  }

  return result;
}
console.log(findBooksByAuthor("Fujiko Fujio"));

// 

function listBook(dsbook) {
  return dsbook.map((item) => 
    `${item.title} - ${item.price / 1000}k (${item.quantity}quyển)`
  ).join(" | ")
};
console.log(listBook(books));

