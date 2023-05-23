import { Turn as Hamburger } from 'hamburger-react';
import { HamburgerButtonWrapper } from './HamburgerButton.styled';

interface Props {
  isOpen: boolean;
  onClick: () => void;
}

const HamburgerButton = ({ isOpen, onClick }: Props) => {
  return (
    <HamburgerButtonWrapper>
      <Hamburger toggled={isOpen} toggle={onClick} />
    </HamburgerButtonWrapper>
  );
};

export default HamburgerButton;
