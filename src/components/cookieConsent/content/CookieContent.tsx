import { CookieContentWrapper, CookieLink } from './CookieContent.styled';

const CookieContent = () => {
  return (
    <CookieContentWrapper className="cookie-content">
      <p>
        Pro správnou funkci tohoto webu, měření návštěvnosti a personalizaci
        reklam používáme soubory cookies.
      </p>
      <CookieLink to="/cookies">Více o cookies</CookieLink>
    </CookieContentWrapper>
  );
};

export default CookieContent;
