import { CookieButtonStyled } from './CookieButton.styled';

interface Props {
  text: string;
  handleAction: () => void;
}

const CookieButton = ({ text, handleAction }: Props) => {
  return <CookieButtonStyled onClick={handleAction}>{text}</CookieButtonStyled>;
};

export default CookieButton;
