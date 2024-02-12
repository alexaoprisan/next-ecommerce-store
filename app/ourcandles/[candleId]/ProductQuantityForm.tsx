'use client';

import React, { useState } from 'react';
import { addToCart } from './actions';

export default function SetQuantityForm(props) {
  const [quantity, setQuantity] = useState(1); // Initialize quantity state to 1

  return (
    <div>
      <form>
        <select
          value={quantity}
          onChange={(event) => setQuantity(Number(event.currentTarget.value))}
          className="stylehere"
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
          onClick={async () => await addToCart(props.candleId, quantity)}
          className="mt-2 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Add to Cart
        </button>
      </form>
    </div>
  );
}
