const express = require("express");

const { processPayment } = require("../controller/payment.controller");


const paymentRouter = express.Router();

paymentRouter.post("/payment", processPayment);

module.exports = paymentRouter;
