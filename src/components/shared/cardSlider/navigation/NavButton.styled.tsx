import styled from 'styled-components';

const NavButton = styled.button`
  cursor: pointer;
  position: absolute;
  z-index: 5;
  top: 42%;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  border: 0.5px solid #c1c1c1;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
}`;

export const PrevButtonStyled = styled(NavButton)`
  left: 0px;
`;

export const NextButtonStyled = styled(NavButton)`
  right: 0px;
`;
