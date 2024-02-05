import Link from 'next/link';

export default function RootNotFound() {
  return (
    <div>
      Sorry! This page was not found make sure you visit a page that exists.
      <Link href="/">Return Home</Link>
    </div>
  );
}
