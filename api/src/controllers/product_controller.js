//const mongoose = require('mongoose');
//const product = mongoose.model('products');
const product = require('../models/product');

module.exports = {
    async index(req, res){
        const prod = await product.find();
        return res.json(prod);
    }
};