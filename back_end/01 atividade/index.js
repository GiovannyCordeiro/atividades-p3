const express = require('express');
const app = express();
const port = 3000;

let email = 'fulano@hotmail.com'

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/usuario/10', (req, res) => {
  res.send(email);
});

app.put('/usuario/10', (req,res) => {
  email = req.body.email
  res.send('This is a correcly att')
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});