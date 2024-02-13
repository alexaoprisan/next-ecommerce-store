'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { addToCart } from './actions';

export default function SetQuantityForm(props: Props) {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  return (
    <div>
      <form>
        <select
          value={quantity}
          onChange={(event) => setQuantity(Number(event.currentTarget.value))}
          className="quantitystyle"
          data-test-id="product-quantity"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="5">6</option>
          <option value="5">7</option>
          <option value="5">8</option>
          <option value="5">9</option>
          <option value="5">10</option>
        </select>
        <button
          formAction={async () => {
            router.refresh();
            await addToCart(props.candleId, quantity);
            alert('Product added to cart!');
          }}
          data-test-id="product-add-to-cart"
        >
          Add to Cart
        </button>
      </form>
    </div>
  );
}
