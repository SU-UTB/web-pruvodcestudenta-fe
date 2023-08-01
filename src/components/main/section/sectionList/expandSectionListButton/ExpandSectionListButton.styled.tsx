import styled from 'styled-components';

interface ExpandSectionListButtonStyledProps {
  isExpanded: boolean;
}

export const ExpandSectionListButtonStyled = styled.button<ExpandSectionListButtonStyledProps>`
  background: transparent;
  border: none;
  margin-top: 2rem;
  cursor: pointer;
  font-size: 1.1rem;
  text-align: center;
  font-weight: 700;
  text-decoration: underline;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  svg {
    transition: transform 0.4s;
    transform: ${({ isExpanded }) =>
      isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'};
  }
`;
