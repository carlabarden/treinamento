const express = require('express');
const mongoose = require('mongoose');
const require_dir = require('require-dir');

// Início do app
const app = express();

// Iniciando o BD
mongoose.connect('mongodb://localhost:27017/nodeapi',
    { useNewUrlParser: true }
);
require_dir('./src/models/');

const Product = mongoose.model('Product');
 


// Primeira Rota
//  / == rota raiz
//req == requisição que está sendo feita ao servidor
//res == resposta à requisição
app.get('/', (req, res) => {
   /* Product.create({
        title: "Produto Top",
        description: "Um produto muito top, pode comprar sem medo",
        url: "https://google.com"
    }); */

    return res.send('Uma mensagem.');
});

//porta que a aplicação escuta
app.listen(3001);