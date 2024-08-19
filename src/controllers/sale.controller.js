import { Router } from "express";

import { SaleService } from "../services/sale.service.js";
import { createSaleSchema } from "../models/schemas/sale.schema.js";
import { validateSchema } from "../middlewares/validate.schema.js";

const router = Router();

const saleService = new SaleService();

router.get("/:id", saleService.getSaleById);
router.get("/", saleService.getSaleByUser);
router.post("/", createSaleSchema, validateSchema, saleService.createSale);
router.delete("/:id", saleService.deleteSale);

export default router;