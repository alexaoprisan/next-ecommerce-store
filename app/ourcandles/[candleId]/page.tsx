import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getCandleInsecure } from '../../../database/candles';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';
import SetQuantityForm from './SetQuantityForm';

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

  if (!singleCandle) {
    notFound();
  }

  // get cookie and parse it
  const candlesQuantityCookie = getCookie('quantityCookie');

  const candlesQuantity = !candlesQuantityCookie
    ? []
    : parseJson(candlesQuantityCookie);

  const quantitiesToDisplay = candlesQuantity.find((candlesQuantity) => {
    return candlesQuantity.id === singleCandle.id;
  });

  return (
    <div className="container mx-auto px-8 ">
      <h1 className="text-center text-xl pt-4 ">{singleCandle.productName}</h1>
      <div className="styleitem border border-gray-300 rounded-md p-4 mb-4 flex items-center">
        <Image
          src={`/images/${singleCandle.productName.toLowerCase().replace(/\s/g, '')}.JPG`}
          alt={singleCandle.productName}
          width={300}
          height={200}
          data-test-id="product-image"
          className="pr-4"
        />
        <SetQuantityForm candleId={singleCandle.id} />
      </div>
    </div>
  );
}
