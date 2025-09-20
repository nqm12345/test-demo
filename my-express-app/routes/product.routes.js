import express from "express";
import products from "../data/product.js";
const router = express.Router();

// Lấy tất cả sản phẩm
router.get("/", (req, res) => {
  if (!products) {
    return res
      .status(404)
      .json({ message: "Không tìm thấy danh sách điện thoại" });
  }
  res.json({
    message: "Đây là các điện thoại Apple",
    data: products,
  });
});

// Lấy sản phẩm theo id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return res
      .status(404)
      .json({ message: `Không tìm thấy sản phẩm có id là: ${id}` });
  }

  res.json({
    message: `Lấy sản phẩm ${id} thành công`,
    data: product,
  });
});

router.post("/", (req, res) => {
  const { nameProduct, edition, company, price } = req.body;
  if (!nameProduct || !edition || !company || !price) {
    return res.status(400).json({ message: "Thiếu thông tin sản phẩm" });
  }

  const newProduct = {
    id: products.length + 1,
    nameProduct,
    edition,
    company,
    price,
  };
  products.push(newProduct);
  res.status(201).json({
    message: "Thêm sản phẩm mới thành công",
    data: newProduct,
  });
});

router.put("/:id", (req, res) => {
  const {id} = req.params;
  const { nameProduct, edition, company, price } = req.body;
})

export default router;
