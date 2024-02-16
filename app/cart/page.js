import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getCandleInsecure, getCandlesInsecure } from '../../database/candles';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import RemoveButton from './deletebutton';

export const metadata = {
  title: { default: 'Cart Page' },
  description: 'Cart Page is showing all selected Candles',
};

export default async function CartPage() {
  const candles = await getCandlesInsecure();

  // get the cookies
  const cookie = getCookie('cart');
  const candleCookies = !cookie ? [] : parseJson(cookie);

  // check which candles are in cookies
  const candlesWithCookies = candles.map((candle) => {
    const candleFromCookies = candleCookies.find(
      (candleCookie) => candle.id === candleCookie.id,
    );
    return { ...candle, quantity: candleFromCookies?.quantity };
  });

  // new variable with all products with quantity
  const candlesInCart = candlesWithCookies.filter((candle) => candle.quantity);

  const totalPrice = candlesInCart.reduce(
    (accumulator, candle) => accumulator + candle.price * candle.quantity,
    0,
  );

  return (
    <div className="container mx-auto px-8">
      <div>
        <h1 className="text-center text-xl pt-4 ">Your Cart</h1>
      </div>
      <div className="anothercontainerstyle">
        {candlesInCart.map((candle) => {
          return (
            <div
              key={`candles-${candle.id}`}
              data-test-id={`cart-product-${candle.id}`}
              className="styleitem border border-gray-300 rounded-md p-4 mb-4 flex items-center"
            >
              <Link
                href={`/ourcandles/${candle.id}`}
                data-test-id={`product-${candle.id}`}
              >
                <Image
                  src={`/images/${candle.productName.toLowerCase().replace(/\s/g, '')}.JPG`}
                  width={250}
                  height={300}
                  alt={candle.title}
                  className="styletheimage"
                  data-test-id="product-image"
                />
              </Link>
              <div className="stylehere ml-4 flex-grow">
                <div className="styletheheadline">
                  <h2>{candle.title}</h2>
                </div>
                <div>
                  <div data-test-id="product-price">
                    Price: € {candle.price}
                  </div>
                  <div data-test-id={`cart-product-quantity-${candle.id}`}>
                    Quantity: {candle.quantity}
                  </div>
                </div>
              </div>
              <div data-test-id={`cart-product-remove-${candle.id}`}>
                <RemoveButton
                  candle={candle}
                  className="bg-red-500 text-white py-2 px-4 rounded-md cursor-pointer"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="" />
      <div className="text-right pr-2 pb-4">
        <div className="font-light" data-test-id="cart-total">
          Total: {totalPrice} €
        </div>
        <div className="">
          <Link
            href="/checkout"
            type="button"
            data-test-id="cart-checkout"
            className="bg-customBeige text-white py-4 px-8 rounded-md font-medium"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
