import express from "express";
import Product from '../models/product.model.js';
import mongoose from 'mongoose';

const router = express.Router();

router.post("/", async (req, res) => {
  const product = req.body;

  const newProduct = new Product(product)

  if (!product.name || !product.image || !product.price) {
    return res.status(400).json({success:false, message: "Not all fields were provided"});
  }

  try {
    await newProduct.save();
    res.status(201).json({success:true, data: newProduct});
  } catch (error) {
    console.error("Error in Create product:", error.message)
    res.status(500).json({success: false, message: "Server Error"});
  }
})

router.delete("/:id", async (req, res) => {
  const {id} = req.params
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({success: true, message: `Deleted product with id: ${id}`});
  } catch (error) {
    res.status(404).json({success: false, message: "Not Found"});

  }
})

// get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({success: true, data: products});
  } catch (error) {
    console.log("Error in fetching products:", error)
    res.status(500).json({success: false, message: "Server Error"});
  }

})

// update method
router.put("/:id", async (req, res) => {
  const {id} = req.params
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({success: false, message: "Product not found"});
  }
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {new:true});
    res.status(200).json({success: true, message: `Updated product with id: ${id}`, data: updatedProduct});
  } catch (error) {
    res.status(500).json({success: false, message: "Server Error"});
  }
})

export default router;
