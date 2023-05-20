import Cookies from 'js-cookie';
import { useState } from 'react';
import {
  CookieBannerWrapper,
  CookieButtonsWrapper,
} from './CookieBanner.styled';
import CookieContent from './content/CookieContent';
import CookieButton from './cookieButton/CookieButton';
import CookieHeader from './header/CookieHeader';

interface Props {
  onAcceptCookies: () => void;
  onDeclineCookies: () => void;
}

const CookieBanner = ({ onAcceptCookies, onDeclineCookies }: Props) => {
  const [showCookieBanner, setShowCookieBanner] = useState<boolean>(
    !Cookies.get('cookieConsent'),
  );

  const handleDeclineCookies = () => {
    Cookies.set('cookieConsent', 'false', { expires: 365, path: '/' });
    setShowCookieBanner(false);
    onDeclineCookies();
  };

  const handleAcceptCookies = () => {
    Cookies.set('cookieConsent', 'true', { expires: 365, path: '/' });
    setShowCookieBanner(false);
    onAcceptCookies();
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
            />
            <CookieButton
              text="Přijmout"
              handleAction={() => {
                handleAcceptCookies();
              }}
            />
          </CookieButtonsWrapper>
        </CookieBannerWrapper>
      )}
    </>
  );
};

export default CookieBanner;
