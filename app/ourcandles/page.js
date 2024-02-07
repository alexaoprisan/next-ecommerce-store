import Image from 'next/image';
import Link from 'next/link';
import { getCandlesInsecure } from '../../database/candles.ts';

export const metadata = {
  title: 'Our Candles',
  description: 'Elevate Your Space with Candle Cove',
};

export default async function CandlesPage() {
  const candles = await getCandlesInsecure();

  return (
    <div>
      These are my candles
      <div className="flex flex-wrap justify-center">
        {candles.map((candle) => {
          return (
            <div key={`candles-${candle.id}`} className="m-6">
              <Link href={`/ourcandles/${candle.id}`}>
                <div>{candle.productName}</div>
                <Image
                  src={`/images/${candle.productName.toLowerCase().replace(/\s/g, '')}.JPG`}
                  width={300}
                  height={200}
                  alt={candle.productName}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
