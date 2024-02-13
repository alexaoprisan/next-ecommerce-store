import { cookies } from 'next/headers';
import Link from 'next/link';
import { useRouter } from 'next/router';

type CheckoutProps = {
  cookies:
    | [
        {
          id: number;
          quantity: number;
          size: string;
          index: number;
        },
      ]
    | null;
  sum: number;
};

type PricesType = {
  price: number;
}[];

const Checkout = (props: CheckoutProps) => {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    Cookies.set('cart', []);
    router.push('/thankyou');
  };

  if (props.cookies === null) {
    return (
      <div>
        <div>Nothing in the shopping Cart!</div>
        <Link href="/"> Back Home</Link>
      </div>
    );
  }

  return (
    <div>
      <div className="wrapper">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <h1>
              <i className="fas fa-shipping-fast" />
              Shipping Details
            </h1>
            <div className="name">
              <div>
                <label htmlFor="f-name">First Name</label>
                <input data-cy="f-name" type="text" name="f-name" required />
              </div>
              <div>
                <label htmlFor="l-name">Last Name</label>
                <input data-cy="l-name" type="text" name="l-name" required />
              </div>
            </div>
            <div className="street">
              <label htmlFor="name">Street</label>
              <input data-cy="street" type="text" name="address" required />
            </div>
            <div className="address-info">
              <div>
                <label htmlFor="city">City</label>
                <input data-cy="city" type="text" name="city" required />
              </div>
              <div>
                <label htmlFor="state">State</label>
                <input data-cy="state" type="text" name="state" required />
              </div>
              <div>
                <label htmlFor="zip">Zip</label>
                <input data-cy="zip" type="text" name="zip" required />
              </div>
            </div>
            <h1>
              <i className="far fa-credit-card" /> Payment Information
            </h1>
            <div className="cc-num">
              <label htmlFor="card-num">Credit Card No.</label>
              <input data-cy="card-num" type="text" name="card-num" required />
            </div>
            <div className="cc-info">
              <div>
                <label htmlFor="card-num">Exp</label>
                <input data-cy="expire" type="text" name="expire" required />
              </div>
              <div>
                <label htmlFor="card-num">CCV</label>
                <input
                  data-cy="security-num"
                  type="text"
                  name="security"
                  required
                />
              </div>
            </div>
            <div className="btns">
              <button data-cy="purchase">
                Purchase (Total sum: {props.sum} €)
              </button>
              <Link href="/cart">Back to cart</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
