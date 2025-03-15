import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json()); // Allows Express to parse JSON request bodies

// ✅ Connect to MySQL Database
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Change if you have a different username
  password: "", // Add your MySQL password
  database: "disaster_db",
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
    return;
  }
  console.log("✅ Connected to MySQL database");
});

// ✅ Paste your route here
app.post("/api/report", (req, res) => {
  const { type, location, severity, description } = req.body;

  if (!type || !location || !severity || !description) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const query = "INSERT INTO disasters (type, location, severity, description) VALUES (?, ?, ?, ?)";
  db.query(query, [type, location, severity, description], (err, result) => {
    if (err) {
      console.error("❌ Error inserting data:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.status(201).json({ message: "Disaster reported successfully", id: result.insertId });
  });
});

// ✅ Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
