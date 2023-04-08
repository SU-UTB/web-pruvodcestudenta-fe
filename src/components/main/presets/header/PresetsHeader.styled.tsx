import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  margin: 48px 0;
  text-align: center;
`;

export const StyledParagraph = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 108%;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 36px;
  }
`;
