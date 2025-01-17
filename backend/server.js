import express from 'express'
import { connectDB } from './config/db.js';
import productRoutes from "./routes/product.route.js"

const port = process.env.SERVER_PORT || 5000;
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
