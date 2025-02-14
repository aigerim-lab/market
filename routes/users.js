const express = require("express");
const router = express.Router();

// Заглушка для регистрации пользователя
router.post("/register", async (req, res) => {
  res.json({ message: "User registered successfully" });
});

// Заглушка для логина
router.post("/login", async (req, res) => {
  res.json({ message: "User logged in successfully" });
});

module.exports = router;