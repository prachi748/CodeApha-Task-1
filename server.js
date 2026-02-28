const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/* ✅ FRONTEND */
app.use(express.static("public"));

/* ✅ ROUTES IMPORT */
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");

/* ✅ DEBUG LOGS */
console.log("User Routes Loaded");
console.log("Product Routes Loaded");
console.log("Order Routes Loaded");

/* ✅ ROUTES USE */
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

/* TEST ROUTE */
app.get("/test", (req,res)=>{
  res.send("Server Working ✅");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});