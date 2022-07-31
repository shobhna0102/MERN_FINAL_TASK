// const Joi = require('joi');
// const mongoose = require('mongoose');

// const category = new mongoose.Schema({
//     category_name: { type: String , min: 3, max: 255 },
//     parent: new mongoose.Types.ObjectId,
//     createdAt:  { type: Date, default: Date.now },
//     updatedAt:  { type: Date, default: Date.now }

// });
// const categoryModel = mongoose.model('categories', category);

// function validateCategoryDetail(cat) {
//     const schema = Joi.object({
//         category_name: Joi.string().max(255).required(),
//         parent: Joi.string().max(255),
//         createdAt: Joi.date(),
//         updatedAt: Joi.date()
//     });
//     return schema.validate(cat);
// }
// module.exports = { validateCategoryDetail, categoryModel };
