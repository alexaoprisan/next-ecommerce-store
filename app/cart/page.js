import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getCandleInsecure, getCandlesInsecure } from '../../database/candles';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import RemoveButton from './deletebutton';

export const metadata = {
  title: { default: 'Cart Page' },
  description: 'Cart Pages is showing all selected Candles',
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
    <div className="sectioncontainerstyle">
      <div>
        <h1>Your Cart:</h1>
      </div>
      <div className="anothercontainerstyle">
        {candlesInCart.map((candle) => {
          return (
            <div
              key={`candles-${candle.id}`}
              data-test-id={`cart-product-${candle.id}`}
              className="styleitem"
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
              <div className="stylehere">
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
                <div data-test-id={`cart-product-remove-${candle.id}`}>
                  <RemoveButton candle={candle} />
                </div>
                <br />
              </div>
              {/* </Link> */}
            </div>
          );
        })}
      </div>
      <div className="addstyle" />
      <div className="stylecheckoutsection">
        <div className="addtotalpricestyle" data-test-id="cart-total">
          Total: {totalPrice} €
        </div>
        <div>
          <Link
            href="/checkout"
            type="button"
            data-test-id="cart-checkout"
            className="stylescheckoutbutton"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
