const http = require("http");
const express = require("express");
const { urlencoded } = require("body-parser");
const app = express();

const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop");

app.use(urlencoded({ extended: false }));
app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);

app.use((req, res) => {
  res.status(404).send(`
  <h1>Page Not Found</h1>
  `);
});
app.listen(3000);
