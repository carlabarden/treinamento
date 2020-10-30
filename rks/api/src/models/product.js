/// MVC = Model View Control
// O Model é "uma tabela" no BD, ou, ainda, uma estrutura de dados

const mongoose = require('mongoose');
const mongoose_paginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

ProductSchema.plugin(mongoose_paginate);

module.exports = mongoose.model('Product', ProductSchema);