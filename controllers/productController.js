const db = require("../db");

exports.addProduct = (req, res) => {
  const { name, price } = req.body;

  db.query(
    "INSERT INTO products (name, price) VALUES (?,?)",
    [name, price],
    (err, result) => {
      if (err) return res.send(err);
      res.send("Product Added");
    }
  );
};

exports.getProducts = (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) return res.send(err);
    res.json(result);
  });
};