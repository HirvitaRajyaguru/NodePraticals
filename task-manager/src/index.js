const express = require('express');

const app = express();
const port = process.env.port || 5000;

app.use(express.json())

app.post('/users', (req, res) => {
    console.log(req.body);
  res.send("Testing.....");
});

app.listen(port, () => {
  console.log("server is on Port no 4000", port);
});
