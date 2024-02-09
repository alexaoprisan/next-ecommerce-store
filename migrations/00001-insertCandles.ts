import { Sql } from 'postgres';

const candles = [
  {
    id: 1,
    productName: 'Elegant Lucia',
    productDescription: 'pillar Candle',
    price: 5,
  },
  {
    id: 2,
    productName: 'Sparkly Amber',
    productDescription: 'pinetree Candle',
    price: 7,
  },

  {
    id: 3,
    productName: 'Divine Dora',
    productDescription: 'rounded Candle',
    price: 5,
  },
  {
    id: 4,
    productName: 'Classic Berta',
    productDescription: 'stick Candle',
    price: 2,
  },
  {
    id: 5,
    productName: 'Zen Nora',
    productDescription: 'bubble pinetree Candle',
    price: 8,
  },
  {
    id: 6,
    productName: 'Sophisticated Jess',
    productDescription: 'ball Candle',
    price: 5,
  },
  {
    id: 7,
    productName: 'Flaming Agatha',
    productDescription: 'wavy Candle',
    price: 4,
  },
  {
    id: 8,
    productName: 'Bubbly Billy',
    productDescription: 'bubble Candle',
    price: 7,
  },
];

export async function up(sql: Sql) {
  for (const candle of candles) {
    await sql`
      INSERT INTO
        candles (
          product_name,
          product_description,
          price
        )
      VALUES
        (
          ${candle.productName},
          ${candle.productDescription},
          ${candle.price}
        )
    `;
  }
}

export async function down(sql: Sql) {
  for (const candle of candles) {
    await sql`
      DELETE FROM candles
      WHERE
        id = ${candle.id}
    `;
  }
}
