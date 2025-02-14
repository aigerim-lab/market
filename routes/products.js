const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

// Добавить продукт
router.post("/", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.status(201).json(product);
});

// Получить все продукты
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Обновить продукт
router.put("/:id", async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(product);
});

// Удалить продукт
router.delete("/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
});

module.exports = router;