const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => console.log("Kết nối MongoDB thành công"))
  .catch((err) => console.log("Lỗi kết nối MongoDB:", err));

app.get("/", (req, res) => {
  res.send("Hệ thống quản lý bán hàng cơ bản");
});

app.listen(port, () => {
  console.log(`Server chạy tại http://localhost:${port}`);
});
