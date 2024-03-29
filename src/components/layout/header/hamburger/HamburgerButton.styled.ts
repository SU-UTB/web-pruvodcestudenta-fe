import styled from 'styled-components';

export const HamburgerButtonWrapper = styled.button`
  outline: none;
  background: none;
  border: none;
  appearance: none;
  padding: 0;
  margin: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
}`;
