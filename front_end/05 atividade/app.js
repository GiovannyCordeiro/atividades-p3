const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.json())

let products = [
  {id: 1, name: 'Notebook', price: 2500},
  {id: 2, name: 'Smartphone', price: 1500},
]

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/products', (req, res) => {
  res.send(products);
});

app.post('/products', (req, res) => {
  const newProduct = req.body;
  newProduct.id = products.length + 1;
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});