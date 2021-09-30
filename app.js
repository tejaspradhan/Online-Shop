const http = require("http");
const express = require("express");
const path = require("path");
const { urlencoded } = require("body-parser");
const app = express();

const adminData = require("./routes/admin.js");
const shopRoutes = require("./routes/shop");

app.set('view engine', 'pug');

app.use(urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));  // for css 
app.use("/admin", adminData.routes);
app.use("/", shopRoutes);

app.use((req, res) => {
  res.status(404).render('404',{pageTitle : 'Error'});
});
app.listen(3000);
