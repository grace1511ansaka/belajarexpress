const express = require('express');
const app = express();

app

app.get('/', (req, res) => {
  res.send('<h1 style="color: red;">Hello World</h1>');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});