const express = require("express"); //Imports the express module
const app = express(); //Creates an instance of the express module
const port = 3000;

//Use template engine
app.set("view engine", "pug");

//Creates a Root Route
app.get("/", (req, res) => {
  res.render("index", { title: "Hey", message: "Hello there!" });
});

app.listen(port, () => {
  // Thay đổi nội dung trả về để truy cập trang web nhanh hơn
  console.log(`Example app listening on port http://localhost:${port}`);
});
