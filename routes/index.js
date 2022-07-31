let express = require('express');
let router = express.Router();
const { validateCategoryDetail, categoryModel, validateProductDetail,productModel } = require('../models/category_schema')
const _ = require("lodash");
let logger = require("../logger");
const mongoose = require("mongoose");
const multer=require('multer');

/* GET home page. */
console.log("hello..........");
router.post("/categoryDetail", async (req, res) => {

  console.log("@@@@@@@");
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
        message: "categories: category name already exists",
        level: "info",
        meta: req.body,
      });
      return res.status(400).send("category name already exists...");
    }

    const catData = new categoryModel(
      _.pick(req.body, [
        "category_name",
        "parent",
        "createdAt",
        "updatedAt",
      ])
    );
    await catData.save();
    res.send(
      _.pick(catData, [
        "category_name",
        "parent",
        "createdAt",
        "updatedAt",
      ])
    );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/deleteCategory", async (req, res) => {
  try {
 let deleteCategory= await categoryModel.findByIdAndRemove(req.query.id)
    if (! deleteCategory) {
      logger.log({
        message: "categories_delete: category id does not exists ",
        level: "info",
      });
      return res.status(400).send("Category id does not exists");
      } else {
        res.send({
          message: "Category deleted successfully!",
        });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
    })

    router.get("/fetchCategory", async (req, res) => {
      try {
        const category = await categoryModel.find();

        if (!category) {
          logger.log({
            message: "categories_find: category does not exists ",
            level: "info",
          });
          return res.status(400).send("Category does not exists");
          } else {
            res.status(200).json(category);
          }
      
      } catch (error) {
        res.status(404).json({ message: error.message });
      }
    });


    router.put("/categoryUpdate", async (req, res) => {
      try{
      if (!req.body) {
        res.status(400).send({
          message: "Data to update can not be empty!",
        });
      }
      let id = mongoose.Types.ObjectId(req.query.id);
      
     const update= await categoryModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false })

      if (!update) {
        logger.log({
          message: "categories_update: category id does not exists ",
          level: "info",
        });
        return res.status(400).send("Category  id does not exists");
        } else {
          res.send({ message: "Categoty updated successfully." });
        }
      } catch (error) {
        res.status(404).json({ message: error.message });
      }
    });




    //product CRUD api

    const upload = multer({
      storage: multer.diskStorage({
        destination: function (req, res, callback) {
          callback(null, "uploads");
        },
        filename: function (req, file, callback) {
    
            var filetype = '';
            if(file.mimetype === 'image/gif') {
              filetype = 'gif';
            }
            if(file.mimetype === 'image/png') {
              filetype = 'png';
            }
            if(file.mimetype === 'image/jpeg') {
              filetype = 'jpg';
            }
          callback(null, 'image-'+ "-" + Date.now() +'.' + filetype);
        },
      }),
    }).single("user_file");

    
    router.post("product/productAdd", upload, async (req, res) => {

      try {
        const { error } = validateProductDetail(req.body);
    
        if (error) {
          logger.log({
            message: "productsAdd: parameter are missing",
            level: "error",
           
          });
          return res.status(400).send(error.details[0].message);
        }
        let product = await productModel.findOne({ product_name: req.body.product_name });
        console.log('@@@@@@@@@@',product);
        if (product) {
          logger.log({
            message: "products: product name already exists",
            level: "info",
            
          });
          return res.status(400).send("product name already exists...");
        }
    
        const productData = new productModel(
          // _.pick(req.body, [
          //   "category_id",
          //   "product_name",
          //   "description",
          //   "price",
          //   "createdAt",
          //   "updatedAt",
          // ]) 
         { category_id:req.body.category_id,
          product_name:req.body.product_name,
          description: req.body.description,
          price: req.body.price,
          images: req.file.images,  //update this
          createdAt:req.body.createdAt,
          updatedAt:req.body.updatedAt});
        await productData.save();
        res.send(
          _.pick(productData, [
            "category_id",
            "product_name",
            "description",
            "price",
            "images",
            "createdAt",
            "updatedAt",,
          ])
        );
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });


      // try {


      //   res.send("File uploaded successfully......");
      // } catch (error) {
      //   res.status(404).json({ message: error.message });
      // }
    
    




module.exports = router;
