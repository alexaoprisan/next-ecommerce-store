'use client';

import { useEffect, useState } from 'react';
import { parseJson } from '../util/json';
import { getLocalStorage, setLocalStorage } from '../util/localStorage';

export default function CookieBanner() {
  const [areCookiesAccepted, setAreCookiesAccepted] = useState(false);

  useEffect(() => {
    const localStorageValue = getLocalStorage('cookiePolicy');
    if (localStorageValue) {
      setAreCookiesAccepted(parseJson(localStorageValue));
    } else {
      setAreCookiesAccepted(false);
    }
  }, []);

  const handleAcceptCookies = () => {
    setLocalStorage('cookiePolicy', JSON.stringify(true));
    setAreCookiesAccepted(true);
  };

  return (
    <div>
      {!areCookiesAccepted && (
        <div className="fixed top-4 right-4 bg-white p-4 rounded-md shadow-md">
          <div className="font-serif text-gray-800">
            Do you accept the use of cookies?
          </div>
          <button
            className="stylencookiebutton bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
            onClick={handleAcceptCookies}
          >
            Accept
          </button>
        </div>
      )}
    </div>
  );
}
