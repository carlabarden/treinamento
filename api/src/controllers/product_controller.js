const { update } = require('../models/product');
//const mongoose = require('mongoose');
//const product = mongoose.model('products');
const product = require('../models/product');

module.exports = {
    //todos os produtos
    async index(req, res){
        const prod = await product.find();
        return res.json(prod);
    }, 

    //um produto
    async show(req, res){
        const prod = await product.findById(req.params.id);
        return res.json(prod);
    },

    async store(req, res){
        const prod = await product.create(req.body); 
        return res.json(prod);
    },

    async update(req, res){
        const prod = await product.findByIdAndUpdate(req.params.id, req.body, {
           new: true
        });
        return res.json(prod);
    },

    async destroy(req, res){
        await product.findByIdAndRemove(req.params.id);
        res.send();
    }
};