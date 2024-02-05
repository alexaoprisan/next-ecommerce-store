import './globals.css';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo.png';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Home page | Candle Cove',
    template: '%s | Candle Cove',
  },
  description: 'Elevate Your Space with Candle Cove',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="relative">
          <div className="border border-gray-300 shadow-md flex justify-center items-center bg-gray-100 h-16">
            <div className="">
              <Image
                src={logo}
                alt="Logo"
                className="absolute top-0 left-0 w-52 h-auto z-10"
              />
            </div>
            <nav className="flex justify-center items-center space-x-40">
              <Link href="/" className=" mb-5">
                Home
              </Link>
              <Link href="/about" className=" mb-5">
                About
              </Link>
              <Link href="/ourcandles" className="mb-5">
                Our Candles
              </Link>
              <Link href="/help" className="mb-5">
                Help
              </Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer>Hello Footer</footer>
      </body>
    </html>
  );
}

// Typically, a file named layout.js might be used to define a layout component in a Next.js project. Layout components are often used to provide a consistent structure or appearance across multiple pages of your application.
// This component might contain elements such as a header, footer, navigation menu, and other common UI elements that you want to appear on multiple pages.
// Layout components in Next.js can be used to wrap individual page components, ensuring that the layout is consistent across all pages.
