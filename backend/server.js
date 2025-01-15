import express from 'express'

const port = 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("Server is healthy");
})

app.get("/heart", (req, res) => {
  res.send("Server is healthy");
})

app.listen(port, () => {
  console.log(`server started at https://localhost:${port}`);
});
