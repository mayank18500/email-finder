import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.static("public"));
app.set("view engine", "ejs");

// Load from environment variables (no hardcoding 🔐)
const TOMBA_URL = process.env.TOMBA_URL || "https://api.tomba.io/v1/email-finder";
const TOMBA_KEY = process.env.TOMBA_KEY;
const TOMBA_SECRET = process.env.TOMBA_SECRET;

// Routes
app.get("/", (req, res) => {
  res.render("index", { data: null, error: null });
});

app.get("/find", async (req, res) => {
  const { fname, lname, domain } = req.query;

  // Validate input before hitting API
  if (!fname || !lname || !domain) {
    return res.render("index", { data: null, error: "⚠️ Please provide first name, last name, and domain." });
  }

  try {
    const response = await axios.get(TOMBA_URL, {
      params: {
        first_name: fname,
        last_name: lname,
        domain
      },
      headers: {
        "X-Tomba-Key": TOMBA_KEY,
        "X-Tomba-Secret": TOMBA_SECRET,
      }
    });

    res.render("index", { data: response.data.data, error: null });
  } catch (error) {
    console.error("❌ Error fetching from Tomba API:", error.response?.data || error.message);

    // User-friendly error
    res.render("index", {
      data: null,
      error: "❌ Could not retrieve email. Please try again later."
    });
  }
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
