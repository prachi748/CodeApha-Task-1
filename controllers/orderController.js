const db = require("../db");

// PLACE ORDER
exports.placeOrder = (req, res) => {
  const { user_id, product_id, quantity } = req.body;

  const sql =
    "INSERT INTO orders (user_id, product_id, quantity) VALUES (?, ?, ?)";

  db.query(sql, [user_id, product_id, quantity], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send("Order placed successfully");
  });
};

// GET ALL ORDERS
exports.getOrders = (req, res) => {
  const sql = "SELECT * FROM orders";

  db.query(sql, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
};