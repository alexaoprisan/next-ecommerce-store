'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { removeCookieCart } from './actions';

export default function CheckoutForm(props) {
  const router = useRouter();
  const handlePurchase = async () => {
    await removeCookieCart();
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handlePurchase().catch((error) => {
          console.log(error);
        });
        router.push('/thankyou');
      }}
    >
      {props.children}
      <button
        className="bg-customBeige text-white py-4 px-8 rounded-md font-medium text-right "
        data-test-id="checkout-confirm-order"
      >
        Confirm Order
      </button>
    </form>
  );
}
