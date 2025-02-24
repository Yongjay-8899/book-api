const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json()); // ต้องแน่ใจว่าใช้งาน JSON middleware ถูกต้อง

app.post("/test", (req, res) => {
    console.log(req.body); // ตรวจสอบ JSON ที่ส่งมา
    res.send("OK");
});

app.listen(3000, () => console.log("Server is running on port 3000"));
