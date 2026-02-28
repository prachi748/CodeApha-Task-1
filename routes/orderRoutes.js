const express = require("express");
const router = express.Router();
const order = require("../controllers/orderController");

router.post("/place", order.placeOrder);
router.get("/all", order.getOrders);
module.exports = router;