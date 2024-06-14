// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.processPayment = async (req, res) => {
  const { token, amount } = req.body;

  try {
    const charge = await stripe.charges.create({
      amount,
      currency: "usd",
      source: token,
      description: "Udemy course payment",
    });

    res.json({ success: true, charge });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
