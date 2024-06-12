import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    const { error, token } = await stripe.createToken(card);

    if (error) {
      setError(error.message);
    } else {
      setError(null);
      try {
        const response = await axios.post("http://localhost:5000/api/payment", {
          token: token.id,
          amount: 999, // Amount in cents
        });

        if (response.data.success) {
          setSuccess(true);
        }
      } catch (error) {
        setError("Payment failed");
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
        {error && <div>{error}</div>}
        {success && <div>Payment Successful</div>}
      </form>
    </div>
  );
};

const StripeWrapper = () => (
  <Elements stripe={stripePromise}>
    <PaymentForm />
  </Elements>
);

export default StripeWrapper;
