import Image from 'next/image';
import Link from 'next/link';
import { getCandlesInsecure } from '../../database/candles';

export const metadata = {
  title: 'Our Candles',
  description: 'Elevate Your Space with Candle Cove',
};

export default async function CandlesPage() {
  const candles = await getCandlesInsecure();

  return (
    <div>
      <h1 className="text-center text-xl pt-4 pb-4">All</h1>
      <div className="flex flex-wrap justify-center ">
        {candles.map((candle) => {
          return (
            <div
              key={`candles-${candle.id}`}
              className="styleitem border border-gray-300 rounded-md p-4 mb-4 mr-10 flex items-center"
            >
              <Link href={`/ourcandles/${candle.id}`}>
                <div>{candle.productName}</div>
                <Image
                  src={`/images/${candle.productName.toLowerCase().replace(/\s/g, '')}.JPG`}
                  width={300}
                  height={200}
                  alt={candle.productName}
                />
                <div data-test-id="product-price">Price: {candle.price} €</div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
