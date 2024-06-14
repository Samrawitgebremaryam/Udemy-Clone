const express = require("express");
const router = express.Router();
const { processPayment } = require("../controller/payment.controller");

router.post("/payment", processPayment);

module.exports = router;
