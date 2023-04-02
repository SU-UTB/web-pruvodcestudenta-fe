import styled from 'styled-components';

export const SplashH1 = styled.h1`
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  margin: 62px 0 16px 0;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 62px;
    margin: 120px 0 20px 0;
  }
`;
