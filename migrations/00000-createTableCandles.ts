import { Sql } from 'postgres';

export type Candle = {
  id: number;
  productName: string;
  productDescription: string;
  price: number;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE candles (
      id integer PRIMARY key generated by DEFAULT AS identity,
      product_name varchar(40) NOT NULL,
      product_description varchar(100) NOT NULL,
      price integer NOT NULL
    )
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE candles `;
}
