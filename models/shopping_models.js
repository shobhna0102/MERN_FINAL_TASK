const Joi = require('joi');
const mongoose = require('mongoose');

const category = new mongoose.Schema({
    category_name: String,
    parent: String,
    createdAt: Date,
    updatedAt: Date

});
const categoryModel = mongoose.model('categories', category);

function validateCategoryDetail(cat) {
    const schema = Joi.object({
        category_name: Joi.string().max(255).required(),
        parent: Joi.string().max(255),
        createdAt: Joi.date(),
        updatedAt: Joi.date()
    });
    return schema.validate(cat);
}
module.exports = { validateCategoryDetail, categoryModel };
