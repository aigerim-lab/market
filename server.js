require("dotenv").config();
const express = require("express");
const connectDB = require("./db");

const app = express();
app.use(express.json());

connectDB();

app.use("/api/products", require("./routes/products"));
app.use("/api/users", require("./routes/users"));
app.use("/api/orders", require("./routes/orders"));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const userRoutes = require("./routes/users"); 
app.use("/users", userRoutes);

const orderRoutes = require("./routes/orders");  
app.use("/orders", orderRoutes);