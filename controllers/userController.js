const db = require("../db");

exports.register = (req, res) => {
  const { name, email, password } = req.body;

  db.query(
    "INSERT INTO users(name,email,password) VALUES(?,?,?)",
    [name, email, password],
    (err) => {
      if (err) return res.send(err);
      res.send("User Registered");
    }
  );
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email=? AND password=?",
    [email, password],
    (err, result) => {
      if (result.length > 0)
        res.send("Login Success");
      else
        res.send("Invalid Credentials");
    }
  );
};