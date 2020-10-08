const express = require('express');
const mongoose = require('mongoose');
const require_dir = require('require-dir');

// Início do app
const app = express();
app.use(express.json());

// Iniciando o BD
mongoose.connect('mongodb://localhost:27017/nodeapi',{ 
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true

});
require_dir('./src/models/');

//para rotas
app.use('/api', require('./src/routes'));
//porta que a aplicação escuta
app.listen(3001);