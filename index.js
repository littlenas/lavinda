const express = require("express");
const app = express();
const port = 3000;

// root
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// contact
app.get("/contact", (req, res) => {
  res.send("This is contact api!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
