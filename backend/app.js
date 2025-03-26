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
  .connect(process.env.MONGODB_URL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  })
  .then(() => console.log("✅ DB Connected"))
  .catch((e) => console.error("❌ DB Connection Error:", e));

// Enhanced CORS Configuration
const allowedOrigins = [
  "http://localhost:5173",
  "https://production-repo-frontend.vercel.app",
  "https://production-repo-frontend-git-*.vercel.app" // For preview deployments
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.some(allowedOrigin => {
      return origin === allowedOrigin || 
             origin.startsWith(allowedOrigin.replace('*', ''));
    })) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 200 // For legacy browser support
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Explicitly handle OPTIONS requests
app.options('*', cors(corsOptions));

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
