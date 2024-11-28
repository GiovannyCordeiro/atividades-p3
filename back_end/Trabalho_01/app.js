const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Minha API muito louca mesmo!');
});

app.get('/hello', (req, res) => {
  res.json('Hello world! Value prof! 😄')
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});