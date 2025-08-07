import express from "express";
import { createProduct, deleteProduct, getAllProducts, getFeaturedProducts } from "../controllers/product.controller";
import { adminRoute, protectRoute } from "../middleware/auth.middleware";

const router = express.Router();

router.get("/", protectRoute, adminRoute, getAllProducts);
router.get("/featured", getFeaturedProducts);
router.post("/", protectRoute, adminRoute, createProduct);
router.post("/:id", protectRoute, adminRoute, deleteProduct);


export default router