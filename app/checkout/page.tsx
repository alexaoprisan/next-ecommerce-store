'use client';

import { useRouter } from 'next/navigation';
import { removeCookieCart } from './actions';

export default function Checkout() {
  const router = useRouter();

  const handlePurchase = async () => {
    await removeCookieCart();
    // Redirect to the thank you page after removing the cart cookie
    router.push('/thankyou');
  };

  return (
    <form>
      <div className="container mx-auto px-8">
        <div>
          <h1 className="text-center text-xl pt-4">Checkout</h1>
          <p className="font-normal">Customer information</p>
        </div>

        <div>
          <label data-test-id="checkout-first-name">
            First Name:
            <input
              required
              className="styleitem border border-gray-300 rounded-md"
            />
          </label>
          <br />
          <label data-test-id="checkout-last-name">
            Last Name:
            <input
              required
              className="styleitem border border-gray-300 rounded-md"
            />
          </label>
          <br />
          <label data-test-id="checkout-email">
            Email Address:
            <input
              type="email"
              className="styleitem border border-gray-300 rounded-md"
            />
          </label>
          <br />
          <br />
          <label data-test-id="checkout-address">
            Delivery Address:
            <input
              required
              className="styleitem border border-gray-300 rounded-md"
            />
          </label>
          <br />
          <label data-test-id="checkout-city">
            City:
            <input
              required
              className="styleitem border border-gray-300 rounded-md"
            />
          </label>
          <br />
          <label data-test-id="checkout-country">
            Country:
            <input
              required
              className="styleitem border border-gray-300 rounded-md"
            />
          </label>
          <br />
          <label data-test-id="checkout-postal-code">
            Postal Code:
            <input
              required
              className="styleitem border border-gray-300 rounded-md"
            />
          </label>
          <br />
          <br />
          <p className="font-normal">Payment</p>
          <label data-test-id="checkout-credit-card-type">
            Card Type:
            <input
              required
              className="styleitem border border-gray-300 rounded-md"
            />
          </label>
          <br />
          <label data-test-id="checkout-credit-card">
            Card Number:
            <input
              required
              className="styleitem border border-gray-300 rounded-md"
            />
          </label>
          <br />
          <label data-test-id="checkout-expiration-date">
            Expiration Date:
            <input
              required
              className="styleitem border border-gray-300 rounded-md"
            />
          </label>
          <br />
          <label data-test-id="checkout-security-code">
            CVV Code:
            <input
              required={true}
              type="text"
              className="styleitem border border-gray-300 rounded-md"
            />
          </label>
          <br />
          <br />

          <div className="text-right pr-2 pb-4">
            <button
              className="bg-customBeige text-white py-4 px-8 rounded-md font-medium text-right "
              data-test-id="checkout-confirm-order"
              onClick={handlePurchase}
            >
              Confirm Order
            </button>
          </div>
          <br />
        </div>
      </div>
    </form>
  );
}
