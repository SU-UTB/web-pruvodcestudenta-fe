import styled from 'styled-components';

export interface CookieButtonProps {
  textColor?: string;
  backgroundColor?: string;
}

export const CookieButtonStyled = styled.button<CookieButtonProps>`
  font-size: 1.1rem;
  font-weight: 500;
  padding: 0.4rem 0.6rem;
  border-radius: 6px;
  border: 1px solid;
  border-color: ${({ textColor }) => textColor || '#000000'};
  color: ${({ textColor }) => textColor || '#000000'};
  background-color: ${({ backgroundColor }) => backgroundColor || '#EFEFEFE'};
  cursor: pointer;
`;
