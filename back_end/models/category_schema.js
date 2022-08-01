const Joi = require('joi');
const { isNull } = require('lodash');
const mongoose = require('mongoose');

const category = new mongoose.Schema({
    category_name: { type: String, min: 3, max: 255 },
    parent: { type: mongoose.Schema.Types.ObjectId, ref: 'categories', default: null },

}, { timestamps: true });


const products = new mongoose.Schema({
    category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'categories' },
    product_name: { type: String, min: 3, max: 255 },
    description: { type: String, min: 3, max: 255 },
    price: { type: Number },
    images: { type: Array },


}, { timestamps: true });



const categoryModel = mongoose.model('categories', category);
const productModel = mongoose.model('products', products);

function validateCategoryDetail(cat) {
    const schema = Joi.object({
        category_name: Joi.string().max(255).required(),
        parent: Joi.string(),

    });
    return schema.validate(cat);
}

function validateProductDetail(product) {
    const schema = Joi.object({
        category_id: Joi.string(),
        product_name: Joi.string().max(255).required(),
        description: Joi.string().required(),
        price: Joi.number().required(),
        images: Joi.string(),

    });
    return schema.validate(product);
}



module.exports = { validateProductDetail, productModel, validateCategoryDetail, categoryModel };