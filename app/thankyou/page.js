import Link from 'next/link';

const ThankYouPage = () => {
  return (
    <div>
      <h1>Thank You!</h1>
      <p>Your order has been successfully placed.</p>
      <p>We will process your order shortly.</p>
      <p>Thank you for shopping with us!</p>
      <Link href="/">Back to Home</Link>
    </div>
  );
};

export default ThankYouPage;
