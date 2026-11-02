const express = require('express');
const app = express();

app

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});