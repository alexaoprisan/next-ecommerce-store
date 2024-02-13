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

  return (
    <div>
      <div
        className={`stylecookiebanner ${areCookiesAccepted ? 'closed' : 'open'}`}
      >
        {' '}
      </div>
      <div>Do you accept the use of cookies?</div>
      <button
        className="stylencookiebutton"
        onClick={() => {
          setLocalStorage('cookiePolicy', JSON.stringify(true));
          setAreCookiesAccepted(true);
        }}
      >
        Accept
      </button>
    </div>
  );
}
