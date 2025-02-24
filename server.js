const express = require("express");
const books = require("./app/routes/booksRoute")
const booksRoute = require("./app/routes/booksRoute");
const app = express();
app.use(express.json()); // ใช้ express.json() แทน bodyParser.json()

app.post("/test", (req, res) => {
  console.log(req.body); // ตรวจสอบ JSON ที่ส่งมา
  res.send("OK");
}); 

app.use("/api", booksRoute);

app.listen(3000, () => console.log("Server is running on port 3000"));
