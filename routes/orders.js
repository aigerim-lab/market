const express = require("express");
const router = express.Router();

// Заглушка для создания заказа
router.post("/", async (req, res) => {
  res.json({ message: "Order created successfully" });
});

// Заглушка для получения всех заказов
router.get("/", async (req, res) => {
  res.json([{ id: 1, user: "John Doe", products: ["Product 1", "Product 2"] }]);
});

module.exports = router;