const mysql = require("mysql2");

const dbConfig = {
  host: "localhost",
  user: "root", // เปลี่ยนเป็น user ของคุณ
  password: "", // ใส่รหัสผ่านของคุณ
  database: "books",
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to the database.");
});

module.exports = connection;