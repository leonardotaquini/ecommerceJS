import { Router } from "express";
import { PurchaseService } from "../services/purchase.service.js";
import { createPurchaseSchema } from "../models/schemas/purchase.schema.js";
import { validateSchema } from "../middlewares/validate.schema.js";

const router = Router();

const purchaseService = new PurchaseService();

router.get("/", purchaseService.deletePurchase);
router.get("/:id", purchaseService.getPurchaseById);
router.post("/", createPurchaseSchema, validateSchema, purchaseService.createPurchase);
router.patch("/:id", createPurchaseSchema, validateSchema, purchaseService.updatePurchaseStatus);
router.delete("/:id", purchaseService.deletePurchase);

export default router;