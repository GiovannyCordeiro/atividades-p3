const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/api_dog/randomdog', async (req, res) => {
  try{
    const response = await axios.get("https://dog.ceo/api/breeds/image/random");
    res.json(response.data.message)
  }catch(error){
    console.error(error);
    res.status(500).json({ message: 'Erro ao obter dados da API externa' });
  }
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});