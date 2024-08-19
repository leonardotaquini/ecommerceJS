import { Router } from "express";
import { ProductService } from "../services/product.service.js";
import { createProductSchema } from "../models/schemas/product.schema.js";
import { validateSchema } from "../middlewares/validate.schema.js";

const router = Router();
const productService = new ProductService();

router.get("/", productService.getProducts);
router.get("/:id", productService.getProduct);
router.post("/",  createProductSchema, validateSchema, productService.createProduct);
router.patch("/:id", createProductSchema, validateSchema,  productService.updateProduct);
router.delete("/:id", productService.deleteProduct);


export default router;