import express from 'express';
import data from './data.js';

const app = express();

app.get('api/products/:id', (req, res) => {
    const product = data.products.find((x) => x._id === req.params.id);
    if (product) {
        res.send(data.product);
    } else {
        res.status(404).send({ message:'Produto Não Encontrado'});
        console.log(response.status);
    }
});

app.get('/api/products', (req, res) =>{
    res.send(data.products);
});

app.get('/', (req, res) => {
    res.send('Servidor está rodando');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Servidor em http://localhost:${port}`);
});