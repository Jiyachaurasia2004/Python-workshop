const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:3000"],
  methods: ["POST", "GET"],
}));
app.use(express.json());

// Routes
const contactRoutes = require("./routes/contact");
app.use("/api/contact", contactRoutes);

// Health Check
app.get("/", (req, res) => {
  res.json({ message: "Workshop Backend is running ✅" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
