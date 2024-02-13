'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export default async function removeItem(candle) {
  const cookie = getCookie('cart');
  const candleCookies = !cookie ? [] : parseJson(cookie);

  const removeCandle = candleCookies.filter((candleCookie) => {
    return candle.id !== candleCookie.id;
  });

  await cookies().set('cart', JSON.stringify(removeCandle));
}
