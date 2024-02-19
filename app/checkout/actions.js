'use server';

import { cookies } from 'next/headers';

export async function removeCookieCart() {
  // remove stored cookie
  await cookies().delete('cart');
}
