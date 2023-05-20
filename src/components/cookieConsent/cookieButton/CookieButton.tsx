import { CookieButtonProps, CookieButtonStyled } from './CookieButton.styled';

interface Props extends CookieButtonProps {
  text: string;
  handleAction: () => void;
}

const CookieButton = ({
  text,
  handleAction,
  textColor,
  backgroundColor,
}: Props) => {
  return (
    <CookieButtonStyled
      onClick={handleAction}
      textColor={textColor}
      backgroundColor={backgroundColor}
    >
      {text}
    </CookieButtonStyled>
  );
};

export default CookieButton;
