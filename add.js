const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
let a=10,b=20;
const c =a+b;

app.get("/", (req, res) => {
  return res.json(c);
});

const port = 8080;
module.exports = app.listen(port,()=>{
    console.log(`listening on port ${port}`)
});
