require("dotenv").config();

const express = require("express");
const { MongoClient } = require("mongodb");
const http = require("http");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const logger = require("./services/loggerService"); // Logger service
const errorHandler = require("./middleware/error.middleware"); // Error handling middleware

const uri =
  "mongodb+srv://admin:admin@udemy-clone.e75bb9r.mongodb.net/?retryWrites=true&w=majority&appName=udemy-clone";
const localUrl = "mongodb://localhost:27017/udemy-clone";

const app = express();
const server = http.createServer(app);
const PORT = 6000;
const API_VERSION = "/v1";

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
const usersRouter = require("./routes/user.route");
const coursesRouter = require("./routes/courses.router");
const reviewRouter = require("./routes/review.route"); // Review routes
// const paymentRoute = require('./routes/payment.route');

// Database Connection
mongoose
  .connect(uri)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.stack);
  });

// API Routes
app.use(`${API_VERSION}/users`, usersRouter);
app.use(`${API_VERSION}/courses`, coursesRouter);
app.use(`${API_VERSION}/reviews`, reviewRouter); // Use review routes
// app.use(`${API_VERSION}/payment`, paymentRoute);
// app.use("/api", paymentRoute);

// Error Handling Middleware
app.use(errorHandler);

module.exports = app;
