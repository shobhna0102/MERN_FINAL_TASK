const Joi = require('joi');
const { isNull } = require('lodash');
const mongoose = require('mongoose');

const category = new mongoose.Schema({
    category_name: { type: String , min: 3, max: 255 },
    parent: { type: mongoose.Schema.Types.ObjectId, ref:'categories'},
    createdAt:  { type: Date, default: Date.now },
    updatedAt:  { type: Date, default: Date.now }

});


const products = new mongoose.Schema({
    category_id: { type: mongoose.Schema.Types.ObjectId, ref:'categories'},
    product_name: { type: String , min: 3, max: 255 },
    description:{ type: String , min: 3, max: 255 },
    price:{type:Number},
    images:
    [{
        data: Buffer,
        contentType: String
    }],
    createdAt:  { type: Date, default: Date.now },
    updatedAt:  { type: Date, default: Date.now }

});



const categoryModel = mongoose.model('categories', category);
const productModel = mongoose.model('products', products);

function validateCategoryDetail(cat) {
    const schema = Joi.object({
        category_name: Joi.string().max(255).required(),
        parent:Joi.string(), 
        createdAt: Joi.date(),
        updatedAt: Joi.date()
    });
    return schema.validate(cat);
}

function validateProductDetail(product) {
    const schema = Joi.object({
        category_id:joi.string(),
        product_name: Joi.string().max(255).required(),
        description:Joi.string().required(),
        price:joi.number().required(),
        images:Joi.image().required(),
        createdAt: Joi.date(),
        updatedAt: Joi.date()
    });
    return schema.validate(product);
}



module.exports = { validateProductDetail,productModel,validateCategoryDetail, categoryModel };