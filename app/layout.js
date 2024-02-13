import './globals.css'; // Import global CSS styles
import Image from 'next/image'; // Import Next.js Image component
import Link from 'next/link'; // Import Next.js Link component
import logo from '../public/images/logo.png'; // Import logo image
import CookieBanner from './CookieBanner';

export const metadata = {
  // Metadata for the page
  title: {
    default: 'Home page | Candle Cove', // Default title
    template: '%s | Candle Cove', // Title template
  },
  description: 'Elevate Your Space with Candle Cove', // Page description
};

export default function RootLayout({ children }) {
  // Root layout component
  return (
    <html lang="en">
      <body className="">
        {' '}
        <header className="border border-gray-300 shadow-md flex justify-center items-center bg-gray-100 min-h-24 relative">
          {' '}
          {/* Header container */}
          <Image
            src={logo} // Logo image source
            alt="Logo" // Alt attribute for accessibility
            className="absolute top-0 left-0 w-40 h-auto z-10" // Logo image styles
          />
          <nav className="flex justify-center items-center space-x-40 font-serif">
            {/* Navigation container */}
            <Link
              href="/"
              className="mb-5 hover:border-b-2 hover:border-beige-300"
            >
              {/* Home link */}
              Home
            </Link>
            <Link
              href="/about"
              className="mb-5 hover:border-b-2 hover:border-beige-300"
            >
              {/* About link */}
              About
            </Link>
            <Link
              href="/ourcandles"
              className="mb-5 hover:border-b-2 hover:border-beige-300"
            >
              {/* Our Candles link */}
              Our Candles
            </Link>
            <Link
              href="/help"
              className="mb-5 hover:border-b-2 hover:border-beige-300"
            >
              {/* Help link */}
              Help
            </Link>
            <Link
              href="/cart"
              className="mb-5 hover:border-b-2 hover:border-beige-300"
            >
              {/* Cart link */}
              Cart
            </Link>
          </nav>
        </header>
        <CookieBanner />
        <main>{children}</main> {/* Main content section */}
        <footer className="border border-gray-300 shadow-md flex justify-center items-center bg-gray-100 min-h-24 font-serif">
          © Candle Cove by Johanna-Maria-Alexandra-Oprisan
        </footer>{' '}
        {/* Footer section */}
      </body>
    </html>
  );
}

// Typically, a file named layout.js might be used to define a layout component in a Next.js project. Layout components are often used to provide a consistent structure or appearance across multiple pages of your application.
// This component might contain elements such as a header, footer, navigation menu, and other common UI elements that you want to appear on multiple pages.
// Layout components in Next.js can be used to wrap individual page components, ensuring that the layout is consistent across all pages.
