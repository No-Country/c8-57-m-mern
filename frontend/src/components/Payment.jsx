import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe(
  'pk_test_51M8nPkEZcBXalvvxy6k87YiwyWvwCp0oIq0mQgCuQ9zgLOYchA31na4kTE6pAZRMRstxM7sCtL1knjNv49MDaP5g00nxM62vC9'
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement), //captura la info tipeada por el usuario
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-third p-2">
      <CardElement className="focus:outline-none border p-2 rounded-sm m-2" />
      <button>Buy</button>
    </form>
  );
};

function Payment() {
  return (
    <div className="bg-secondary w-1/2 p-16 container">
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}

export default Payment;
