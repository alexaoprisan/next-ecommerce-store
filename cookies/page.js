import SetQuantityForm from '../app/ourcandles/[candleId]/SetQuantityForm';
import { getCookie } from '../util/cookies.ts';

export default function SetCookiePage() {
  const testCookieValue = getCookie('testCookie');

  return (
    <>
      <div>Cookie Value: {testCookieValue}</div>
      <SetQuantityForm />
    </>
  );
}
