import Cookies from 'js-cookie';
import { useState } from 'react';
import {
  CookieBannerWrapper,
  CookieButtonsWrapper,
} from './CookieBanner.styled';
import CookieContent from './content/CookieContent';
import CookieButton from './cookieButton/CookieButton';
import CookieHeader from './header/CookieHeader';

const CookieBanner = () => {
  const [showCookieBanner, setShowCookieBanner] = useState<boolean>(
    !Cookies.get('cookieConsent'),
  );

  const handleDeclineCookies = () => {
    Cookies.set('cookieConsent', 'false', { expires: 365, path: '/' });
    setShowCookieBanner(false);
  };

  const handleAcceptCookies = () => {
    Cookies.set('cookieConsent', 'true', { expires: 365, path: '/' });
    setShowCookieBanner(false);
  };

  return (
    <>
      {showCookieBanner && (
        <CookieBannerWrapper>
          <CookieHeader />
          <CookieContent />
          <CookieButtonsWrapper>
            <CookieButton
              text="Odmítnout"
              handleAction={() => {
                handleDeclineCookies();
              }}
              textColor=""
              backgroundColor="transparent"
            />
            <CookieButton
              text="Přijmout"
              handleAction={() => {
                handleAcceptCookies();
              }}
              textColor="#ffffff"
              backgroundColor="#fc8032"
            />
          </CookieButtonsWrapper>
        </CookieBannerWrapper>
      )}
    </>
  );
};

export default CookieBanner;
