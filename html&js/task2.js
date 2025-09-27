const text = "Thế thì chịu chịu";
// B1: khai báo ra một hàm để nó duyệt qua mảng

function worlds(str) {
  const logictext = str.split(" ");
  const result = {};
  for (let world of logictext) {
    if (result[world]) {
      result[world] += 1;
    } else {
      result[world] = 1;
    }
  }
  return result;
}

console.log(worlds(text));
// Task3

const products = [
  {
    id: 3,
    name: "Iphone 15 pro max",
    quality: 50,
    price: 31000000,
  },
  {
    id: 1,
    name: "Iphone 17 pro max",
    quality: 100,
    price: 38000000,
  },
  {
    id: 2,
    name: "Iphone 16 PRO max",
    quality: 97,
    price: 36500000,
  },
];
const tong = _.sumBy(products, "price");
console.log(tong);

const filted = (timkiem) =>
  products.filter((u) => u.name.toLowerCase().includes(timkiem.toLowerCase()));
console.log(filted(" "));

// sắp xếp

const sortPrice = _.orderBy(products, ["price"], ["desc"]);
console.log(sortPrice);

const sortPrice2 = _.orderBy(products, ["price"], ["asc"]);
console.log(sortPrice2);
