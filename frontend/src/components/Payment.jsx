import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import useAuth from '../hooks/useAuth';

const stripePromise = loadStripe(
  'pk_test_51M8nPkEZcBXalvvxy6k87YiwyWvwCp0oIq0mQgCuQ9zgLOYchA31na4kTE6pAZRMRstxM7sCtL1knjNv49MDaP5g00nxM62vC9'
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { postCheckout } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('hola');
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement), //captura la info tipeada por el usuario
    });
    if (!error) {
      const { id } = paymentMethod;
      const order = { id, amount: 10000 };
      const data = await postCheckout(order);
    }
    console.log(error);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-full justify-center"
    >
      <CardElement className="p-3 rounded-sm w-full md:w-4/6 bg-gray" />
      <div className="flex flex-row w-full md:w-4/6 items-start">
        <button
          type="button"
          className="bg-third text-xl font-bold w-1/3 mr-2 mt-2 px-2 rounded-sm text-fourth hover:bg-thirdHover"
        >
          Volver
        </button>
        <button
          type="submit"
          className="bg-third text-xl font-bold w-full md:w-1/2 mt-2 px-2 rounded-sm text-fourth hover:bg-thirdHover"
        >
          Pagar
        </button>
      </div>
    </form>
  );
};

function Payment() {
  return (
    <div className="bg-fifth w-3/4 md:w-1/2 p-2 m-auto">
      <header className="text-center p-1 mb-2 font-bold text-2xl text-fourth">
        <h1>Ingresa tus datos</h1>
        <hr className="mt-2" />
      </header>
      <div className="my-2"></div>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}

export default Payment;
