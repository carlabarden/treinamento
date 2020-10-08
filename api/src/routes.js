const express = require("express");
const routes = express.Router();

const product_controller = require("./controllers/product_controller");

// Primeira Rota
//  / == rota raiz
//req == requisição que está sendo feita ao servidor
//res == resposta à requisição
routes.get('/products', product_controller.index);
routes.post('/products',  product_controller.store);


// exportando arquivo
module.exports = routes;
