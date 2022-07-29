let express = require('express');
let router = express.Router();
const { validateCategoryDetail, categoryModel } = require('../models/shopping_models')
const _ = require("lodash");
/* GET home page. */

router.post("/categoryDetail", async (req, res) => {
  try {
    const { error } = validateCategoryDetail(req.body);

    if (error) {
      logger.log({
        message: "categories: parameter are missing",
        level: "error",
        meta: req.body,
      });
      return res.status(400).send(error.details[0].message);
    }
    let categoty = await categoryModel.findOne({ category_name: req.body.category_name });
    if (categoty) {
      logger.log({
        message: "categories: category",
        level: "info",
        meta: req.body,
      });
      return res.status(400).send("Offer id already exists...");
    }

    const catData = new categoryModel(
      _.pick(req.body, [
        "category_name",
        "createdAt",
        "updatedAt",
      ])
    );
    await catData.save();
    res.send(
      _.pick(offerData, [
        "category_name",
        "createdAt",
        "updatedAt",
      ])
    );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
