const User = require("../model/user.mongo");
const express = require("express");

const usersRouter = express.Router();

const {
  registerUser,
  loginUser,
  verifyEmail,
  getUserProfile,
  updateUserProfile,
} = require("../controller/user.controller");
const validateRegistration = require("../middleware/validation.middleware");

usersRouter.post("/register", validateRegistration(), registerUser);
usersRouter.get("/verify-email", verifyEmail);
usersRouter.post("/login", loginUser);

// User profile routes
usersRouter.get("/profile/:id", getUserProfile);
usersRouter.put("/profile/:id", updateUserProfile);

module.exports = usersRouter;
