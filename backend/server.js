import express from 'express'
import { connectDB } from './config/db.js';

const port = 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("Server is healthy");
})

app.get("/items", (req, res) => {
  res.send("todo");
})

app.get("/heart", (req, res) => {
  res.send("Server is healthy");
})

app.listen(port, () => {
  connectDB();
  console.log(`server started at https://localhost:${port}`);
});
