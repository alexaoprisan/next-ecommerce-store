import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getCandlesInsecure } from '../../database/candles';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export const metadata = {
  title: { default: 'Our Candles' },
  description: 'Elevate Your Space with Candle Cove.',
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
    <div className="addstyleshere">
      <div>
        <h1>Your Cart:</h1>
      </div>
      <div className="addstylehere">
        {candlesInCart.map((candle) => {
          return (
            <div key={`candles-${candle.id}`}>
              <Link
                href={`/candles/${candle.id}`}
                data-test-id={`product-${candle.id}`}
                className="addstylehere"
              >
                <Image
                  src={candle.image}
                  width={250}
                  height={300}
                  alt={candle.title}
                  className="stylehere"
                />
                <div className="stylehere">
                  <div className="stylehere">
                    <h2>{candle.title}</h2>
                  </div>
                  <div>
                    <div data-test-id="product-price">
                      Price: € {candle.price}
                    </div>
                    <div>Quantity: {candle.quantity}</div>
                    <div>Total costs: € {candle.price * candle.quantity}</div>
                  </div>
                  <br />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="addstylehere" />
      <div className="addstylehere">Total Price: € {totalPrice}</div>
    </div>
  );
}
