'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import removeItem from './actions';

export default function RemoveButton({ candle }) {
  const router = useRouter();

  const handleRemoveItem = async () => {
    await removeItem(candle);
    router.refresh();
  };

  return (
    <div>
      <button onClick={handleRemoveItem} className="styletheremovebutton">
        Remove Item
      </button>
    </div>
  );
}
