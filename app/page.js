import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/images/homepage.JPG';

export default function Home() {
  return (
    <main className="">
      <div className="border border-gray-300 rounded-md p-4 w-3/2">
        <div className="flex items-center">
          <div>
            <Image
              src={logo} // Logo image source
              alt="homepage" // Alt attribute for accessibility
              className="w-80 h-95 rounded-full" // Logo image styles
            />
          </div>
          <div className="ml-4">
            <h1 className="text-4xl drop-shadow-md">
              Elevate Your Space with Candle Cove
            </h1>
            <p>
              Discover our wide range of elegant and high quality candles for
              every occasion.
            </p>
            <br />
            <Link
              href="/ourcandles"
              className="bg-customBeige text-white py-4 px-8 rounded-md font-medium text-right hover:text-black"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
