const express = require('express');
var request = require('request');
const app = express();
port = process.env.PORT || 5000,
cors = require("cors");

app.use(cors());
app.get("/", (req, res) => {
    res.send({ message: "We did it!" });
  });

app.listen(port, () => console.log(`Listening on port ${port}.`))