const http = require("http");
const express = require("express");
const path = require("path");
const { urlencoded } = require("body-parser");
const app = express();

const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop");

app.use(urlencoded({ extended: false }));
app.use("/admin", adminRoutes);
app.use("/", shopRoutes);

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "error.html"));
});
app.listen(3000);
