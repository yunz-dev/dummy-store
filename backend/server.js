import express from 'express'
import { connectDB } from './config/db.js';
import Product from './models/product.model.js';
import mongoose from 'mongoose';
import productRoutes from "./routes/product.route.js"

const port = 5000;
const app = express();

app.use(express.json()); //middle ware to accept json data in req.body
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Server is healthy");
})

app.get("/heart", (req, res) => {
  res.send("Server is healthy");
})

app.listen(port, () => {
  connectDB();
  console.log(`server started at https://localhost:${port}`);
});
