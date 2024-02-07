// import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getCandleInsecure } from '../../../database/candles.ts';

export async function generateMetadata(props) {
  const singleCandle = await getCandleInsecure(props.params.candleId);
  return {
    title: singleCandle?.productName,
  };
}

export default async function CandlePage(props) {
  const singleCandle = await getCandleInsecure(props.params.animalId);

  if (!singleCandle) {
    notFound();
  }

  return <div>single candle page</div>;
}
