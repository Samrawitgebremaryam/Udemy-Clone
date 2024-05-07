const User = require('../model/user.mongo');
const express = require('express');

// Path: Server/routes/user.route.js

const usersRouter = express.Router();

const {registerUser, loginUser,verifyEmail} = require('../controller/user.controller');
const validateRegistration = require('../middleware/validation.middleware');

usersRouter.post('/register', validateRegistration() ,registerUser);
usersRouter.get('/verify-email', verifyEmail);
usersRouter.post('/login', loginUser);



module.exports = usersRouter;