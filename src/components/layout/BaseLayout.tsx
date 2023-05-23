import CookieBanner from '../cookieConsent/CookieBanner';
import Footer from './footer/Footer';
import Header from './header/Header';

interface Props {
  children: React.ReactNode;
}

export const BaseLayout = ({ children }: Props) => {
  return (
    <>
      <CookieBanner onAcceptCookies={() => {}} onDeclineCookies={() => {}} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
