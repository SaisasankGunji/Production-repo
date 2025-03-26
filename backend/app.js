require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const categoryRouter = require("./routes/categoryRouter");
const transactionRouter = require("./routes/transactionRouter");
const errorHandler = require("./middlewares/errorHandlerMiddleware");

const app = express();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ DB Connected"))
  .catch((e) => console.error("❌ DB Connection Error:", e));

// CORS Configuration
const corsOptions = {
  origin: ["http://localhost:5173", "https://production-repo-frontend.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true, // Allow cookies and authentication headers
};
app.use(cors(corsOptions));

// Handle preflight CORS requests
app.options("*", cors(corsOptions));

// Middlewares
app.use(express.json()); // Parse incoming JSON data

// Routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/transactions", transactionRouter);

// Health Check Route
app.get("/", (req, res) => {
  res.send({ activeStatus: true, error: false });
});

// Error Handling Middleware
app.use(errorHandler);

// Start the Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));
