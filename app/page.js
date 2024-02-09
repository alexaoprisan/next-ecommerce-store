import Image from 'next/image';
import logo from '../public/images/homepage.JPG';

export default function Home() {
  return (
    <main className="">
      <div>
        {' '}
        <Image
          src={logo} // Logo image source
          alt="homepage" // Alt attribute for accessibility
          className="w-96 h-110" // Logo image styles
        />
      </div>
      <div>THIS IS THE HOMEPAGE</div>
    </main>
  );
}
