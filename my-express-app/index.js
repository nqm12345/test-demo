import express from "express";
import productRoutes from "./routes/product.routes.js"
const app = express();

const PORT = 3000;

app.use(express.json());

app.use("/products", productRoutes);

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost: ${PORT}`);
});

