import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products', (req, res) =>{
    res.send(data.products);
})

app.get('/', (req, res) => {
    res.send('Servidor está rodando');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Servidor em http://localhost:${port}`);
});