import express from 'express'
import { connectDB } from './config/db.js';
import Product from './models/product.model.js';

const port = 5000;
const app = express();

app.use(express.json()); //middle ware to accept json data in req.body

app.get("/", (req, res) => {
  res.send("Server is healthy");
})

app.post("/api/products", async (req, res) => {
  const product = req.body;

  if (!product.name || !product.image || !product.price) {
    return res.status(400).json({success:false, message: "Not all fields were provided"});
  }

  const newProduct = new Product(product)

  try {
    await newProduct.save();
    res.status(201).json({success:true, data: newProduct});
  } catch (error) {
    console.error("Error in Create product:", error.message)
    res.status(500).json({success: false, message: "Server Error"});
  }
})

app.get("/heart", (req, res) => {
  res.send("Server is healthy");
})

app.listen(port, () => {
  connectDB();
  console.log(`server started at https://localhost:${port}`);
});
