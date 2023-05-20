import { Link } from 'react-router-dom';
import { CookieContentWrapper } from './CookieContent.styled';

const CookieContent = () => {
  return (
    <CookieContentWrapper className="cookie-content">
      <p>
        Pro správnou funkci tohoto webu, měření návštěvnosti a personalizaci
        reklam používáme soubory cookies.
      </p>
      <Link to="/cookies">Více o cookies</Link>
    </CookieContentWrapper>
  );
};

export default CookieContent;
