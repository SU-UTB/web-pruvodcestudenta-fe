import { Link } from 'react-router-dom';

const CookieContent = () => {
  return (
    <div className="cookie-content">
      <p>
        Pro správnou funkci tohoto webu, měření návštěvnosti a personalizaci
        reklam používáme soubory cookies.
      </p>
      <Link to="/cookies">Více o cookies</Link>
    </div>
  );
};

export default CookieContent;
