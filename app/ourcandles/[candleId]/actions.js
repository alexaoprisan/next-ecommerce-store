'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function createCookie(value) {
  await cookies().set('testCookie', value);
}

export async function addToCart(candleId, quantity) {
  const candlesQuantityCookie = getCookie('cart');

  const candlesQuantity = !candlesQuantityCookie
    ? []
    : parseJson(candlesQuantityCookie);

  const candleToAdd = candlesQuantity.find((candleQuantity) => {
    return candleQuantity.id === candleId;
  });

  if (!candleToAdd) {
    candlesQuantity.push({ id: candleId, quantity: quantity });
  } else {
    candleToAdd.quantity = quantity;
  }

  await cookies().set('cart', JSON.stringify(candlesQuantity));
}
