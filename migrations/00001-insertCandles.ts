import { Sql } from 'postgres';

const candles = [
  {
    id: 1,
    productName: 'Elegant Lucia',
    product_description: 'pillar Candle',
    price: 5,
  },
  {
    id: 2,
    productName: 'Sparkly Amber',
    product_description: 'pinetree Candle',
    price: 7,
  },

  {
    id: 3,
    productName: 'Divine Dora',
    product_description: 'rounded Candle',
    price: 5,
  },
  {
    id: 4,
    productName: 'Classic Berta',
    product_description: 'stick Candle',
    price: 2,
  },
  {
    id: 5,
    productName: 'Zen Nora',
    product_description: 'bubble pinetree Candle',
    price: 8,
  },
  {
    id: 6,
    productName: 'Sophisticated Jess',
    product_description: 'ball Candle',
    price: 5,
  },
  {
    id: 7,
    productName: 'Flaming Agatha',
    product_description: 'wavy Candle',
    price: 4,
  },
  {
    id: 8,
    productName: 'Bubbly Billy',
    product_description: 'bubble Candle',
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
          ${candle.product_description},
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
