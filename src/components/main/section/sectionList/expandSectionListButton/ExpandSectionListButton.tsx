import { ExpandSectionListButtonStyled } from './ExpandSectionListButton.styled';

interface Props {
  setIsExpanded: (value: boolean) => void;
  isExpanded: boolean;
}

const ExpandSectionListButton = ({ setIsExpanded, isExpanded }: Props) => {
  return (
    <ExpandSectionListButtonStyled
      title={`Zobrazit ${isExpanded ? 'Méně' : 'Více'}`}
      isExpanded={isExpanded}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <svg
        width="22"
        height="13"
        viewBox="0 0 22 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21 1L11 11L1 0.999999" stroke="black" strokeWidth="2" />
      </svg>
      <span>{isExpanded ? 'Méně' : 'Více'}</span>
    </ExpandSectionListButtonStyled>
  );
};

export default ExpandSectionListButton;
