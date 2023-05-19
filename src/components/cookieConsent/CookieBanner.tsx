import Cookies from 'js-cookie';
import { useState } from 'react';
import {
  CookieBannerWrapper,
  CookieButtonsWrapper,
} from './CookieBanner.styled';
import CookieContent from './CookieContent';
import CookieHeader from './CookieHeader';
import CookieButton from './cookieButton/CookieButton';

interface Props {
  onAcceptCookies: () => void;
  onDeclineCookies: () => void;
}

const CookieBanner = ({ onAcceptCookies, onDeclineCookies }: Props) => {
  const [showCookieBanner, setShowCookieBanner] = useState<boolean>(
    !Cookies.get('cookieConsent'),
  );

  const handleDeclineCookies = () => {
    Cookies.set('cookieConsent', 'true', { expires: 365 });
    setShowCookieBanner(false);
    onDeclineCookies();
  };

  const handleAcceptCookies = () => {
    Cookies.set('cookieConsent', 'true', { expires: 365 });
    setShowCookieBanner(false);
    onAcceptCookies();
  };

  if (!showCookieBanner) {
    return;
  }

  return (
    <CookieBannerWrapper>
      <CookieHeader />
      <CookieContent />
      <CookieButtonsWrapper>
        <CookieButton
          text="Odmítnout"
          handleAction={() => {
            handleDeclineCookies;
          }}
        />
        <CookieButton
          text="Přijmout"
          handleAction={() => {
            handleAcceptCookies;
          }}
        />
      </CookieButtonsWrapper>
    </CookieBannerWrapper>
  );
};

export default CookieBanner;
