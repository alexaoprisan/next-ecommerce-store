'use client';

import React from 'react';
import CheckoutForm from './checkoutform';

export default function Checkout() {
  return (
    <div className="container mx-auto px-8">
      <div>
        <h1 className="text-center text-xl pt-4">Checkout</h1>
        <p className="font-normal">Customer information</p>
      </div>

      <div>
        <label data-test-id="checkout-first-name">
          First Name:
          <input
            className="styleitem border border-gray-300 rounded-md"
            placeholder="Max"
            required
          />
        </label>
        <br />
        <label data-test-id="checkout-last-name">
          Last Name:
          <input
            className="styleitem border border-gray-300 rounded-md"
            placeholder="Mustermann"
            required
          />
        </label>
        <br />
        <label data-test-id="checkout-email">
          Email Address:
          <input
            type="email"
            className="styleitem border border-gray-300 rounded-md"
            placeholder="max@email.com"
            required
          />
        </label>
        <br />
        <br />
        <label data-test-id="checkout-address">
          Delivery Address:
          <input
            className="styleitem border border-gray-300 rounded-md"
            placeholder="Candle Street 1"
            required
          />
        </label>
        <br />
        <label data-test-id="checkout-city">
          City:
          <input
            className="styleitem border border-gray-300 rounded-md"
            placeholder="Vienna"
            required
          />
        </label>
        <br />
        <label data-test-id="checkout-country">
          Country:
          <input
            className="styleitem border border-gray-300 rounded-md"
            placeholder="Austria"
            required
          />
        </label>
        <br />
        <label data-test-id="checkout-postal-code">
          Postal Code:
          <input
            className="styleitem border border-gray-300 rounded-md"
            placeholder="123456"
            required
          />
        </label>
        <br />
        <br />
        <p className="font-normal">Payment</p>
        <label data-test-id="checkout-credit-card-type">
          Card Type:
          <input
            className="styleitem border border-gray-300 rounded-md"
            placeholder="Visa"
            required
          />
        </label>
        <br />
        <label data-test-id="checkout-credit-card">
          Card Number:
          <input
            className="styleitem border border-gray-300 rounded-md"
            placeholder="1111-2222-3333-4444"
            required
          />
        </label>
        <br />
        <label data-test-id="checkout-expiration-date">
          Expiration Date:
          <input
            className="styleitem border border-gray-300 rounded-md"
            placeholder="12/26"
            required
          />
        </label>
        <br />
        <label data-test-id="checkout-security-code">
          CVV Code:
          <input
            className="styleitem border border-gray-300 rounded-md"
            placeholder="123"
            required
          />
        </label>
        <br />
        <br />
        <div className="text-right pr-2 pb-4">
          {' '}
          <CheckoutForm />
        </div>
        <br />
      </div>
    </div>
  );
}
