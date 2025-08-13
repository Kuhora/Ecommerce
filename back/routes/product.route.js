import express from "express";
import { createProduct, deleteProduct, getAllProducts, getFeaturedProducts, getProductsByCategory, toggleFeaturedProduct } from "../controllers/product.controller";
import { adminRoute, protectRoute } from "../middleware/auth.middleware";

const router = express.Router();

router.get("/", protectRoute, adminRoute, getAllProducts);
router.get("/featured", getFeaturedProducts);
router.get("/category/:category", getProductsByCategory);
router.get("/recommendations", getRecommendedProducts);
router.post("/", protectRoute, adminRoute,  createProduct);
router.patch("/:id", protectRoute, adminRoute, toggleFeaturedProduct);
router.post("/:id", protectRoute, adminRoute, deleteProduct);


export default routers