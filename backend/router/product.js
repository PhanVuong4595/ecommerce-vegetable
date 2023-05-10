import express from "express";

const router = express.Router();

router.get("/products");
router.get("/products/:id");
router.delete("/products/:id");
router.put("/products/:id");
router.post("/products");

export default router;
