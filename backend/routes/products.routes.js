import { Router } from "express";
import {
  getAllProductsController,
  getProductByIdController,
  addProductController,
  updateProductController,
  deleteProductController,
} from "../controllers/products.controller.js";

const router = Router();

// Sample route to get all products
router.get("/getAllProducts", getAllProductsController);
router.get("/getProductById/:id", getProductByIdController);
router.post("/addProduct", addProductController);
router.put("/updateProduct/:existingId", updateProductController);
router.delete("/deleteProduct/:existingId", deleteProductController);

export default router;
