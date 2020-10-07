const express = require('express');
const mongoose = require('mongoose');
 
// Início do app
const app = express();

// Iniciando o BD
mongoose.connect('mongodb://localhost:27017/nodeapi',{ useNewUrlParser: true });


// Primeira Rota
//  / == rota raiz
//req == requisição que está sendo feita ao servidor
//res == resposta à requisição
app.get('/', (req, res) => {
    res.send('Uma mensagem.');
});

//porta que a aplicação escuta
app.listen(3001);