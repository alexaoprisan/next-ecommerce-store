import Image from 'next/image';
// import { notFound } from 'next/navigation';
import { getCandleInsecure } from '../../../database/candles';

type Props = {
  params: {
    candleId: number;
  };
};

export async function generateMetadata(props: Props) {
  const singleCandle = await getCandleInsecure(props.params.candleId);
  return {
    title: singleCandle?.productName,
  };
}

export default async function Candle(props: Props) {
  const singleCandle = await getCandleInsecure(props.params.candleId);

  // if (!singleCandle) {
  //   notFound();
  // }

  return (
    <div>
      Single candle page
      <h1>{singleCandle.productName}</h1>
      <Image
        src={`/images/${singleCandle.productName.toLowerCase().replace(/\s/g, '')}.JPG`}
        alt={singleCandle.productName}
        width={300}
        height={200}
      />
      This is a nice candle.
    </div>
  );
}
