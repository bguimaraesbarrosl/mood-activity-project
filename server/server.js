const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mood_activity_db",
  port: 3307
});

db.connect((err) => {
  if (err) {
    console.log("Database connection error:", err);
  } else {
    console.log("Connected to MySQL database!");
  }
});

app.get("/", (req, res) => {
  res.send("API is running!");
});

app.get("/activities/:mood", (req, res) => {
  const mood = req.params.mood;

  db.query(
    "SELECT * FROM activities WHERE mood = ?",
    [mood],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: err });
      }

      res.json(result);
    }
  );
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});