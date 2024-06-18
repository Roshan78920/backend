const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/user", (req,res) => {
  res.send("user is coming")
} )

app.get("/login", (req, res) => {
  res.send("<h1>user login</h1>")
})

app.get("/youtube", (req, res) => { 
  res.send("<h1>youtube channel created</h1>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
