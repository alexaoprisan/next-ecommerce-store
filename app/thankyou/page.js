import Link from 'next/link';

const ThankYouPage = () => {
  return (
    <div className="box-border p-8 border-4 text-center">
      <h1 className="text-customBeige font-semibold">
        Your order has been successfully placed.
      </h1>
      <p>We will process your order shortly.</p>
      <p>Thank you for shopping with us!</p>
      <Link href="/" className="font-medium">
        Back to Home
      </Link>
    </div>
  );
};

export default ThankYouPage;
