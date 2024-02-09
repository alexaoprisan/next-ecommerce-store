import { cache } from 'react';
import { Candle } from '../migrations/00000-createTableCandles';
import { sql } from './connect';

export const getCandlesInsecure = cache(async () => {
  const candles = await sql<Candle[]>`
    SELECT
      *
    FROM
      candles
  `;

  return candles;
});

export const getCandleInsecure = cache(async (id: number) => {
  // Postgres always returns an array
  const [candle] = await sql<Candle[]>`
    SELECT
      *
    FROM
      candles
    WHERE
      id = ${id}
  `;

  return candle;
});

export const createCandleInsecure = cache(
  // Accept an object as an argument, allowing optional properties like
  // `accessory` before required properties like `birthDate`
  //
  // `Omit` is a TS utility type that excludes a property from a type
  async (newProduct: Omit<Candle, 'id'>) => {
    const [candle] = await sql<Candle[]>`
      INSERT INTO
        candles (
          product_name,
          product_description,
          price
        )
      VALUES
        (
          ${newProduct.productName},
          ${newProduct.productDescription},
          ${newProduct.price}
        )
      RETURNING
        candles.*
    `;

    return candle;
  },
);

export const updateCandleInsecure = cache(async (updatedCandle: Candle) => {
  const [candle] = await sql<Candle[]>`
    UPDATE candles
    SET
      product_name = ${updatedCandle.productName},
      product_description = ${updatedCandle.productDescription},
      price = ${updatedCandle.price}
    WHERE
      id = ${updatedCandle.id}
    RETURNING
      candles.*
  `;

  return candle;
});

export const deleteCandleInsecure = cache(async (id: number) => {
  const [candle] = await sql<Candle[]>`
    DELETE FROM candles
    WHERE
      id = ${id}
    RETURNING
      candles.*
  `;

  return candle;
});
