const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const errorHandler = require("./middlewares/errorHandlerMiddleware");
const categoryRouter = require("./routes/categoryRouter");
const transactionRouter = require("./routes/transactionRouter");
const app = express();

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://Saisasank:Saisasank%40123@cluster0.y5nye.mongodb.net/mern-expenses"
  )
  .then(() => console.log("DB Connected"))
  .catch((e) => console.log(e));

// CORS Configuration
const allowedOrigins = [
  "http://localhost:5173", // For local development
  "https://production-repo-expenses-tracker.vercel.app", // Deployed frontend
];

//CORS Middleware

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Middlewares
app.use(express.json()); // Parse incoming JSON data

// Routes
app.use("/", userRouter);
app.use("/", categoryRouter);
app.use("/", transactionRouter);

app.get("/", (req, res) => {
  res.send({
    status: 200,
    msg: "This is Home Page",
  });
});

// Error Handler
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
