import express from "express";
import { newProduct, getProducts, updateProduct, deleteProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.post("/", newProduct)

router.delete("/:id", deleteProduct)

router.get("/", getProducts)

router.put("/:id", updateProduct)

export default router;
