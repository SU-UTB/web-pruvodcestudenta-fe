import styled from 'styled-components';

export const SplashH1 = styled.h1`
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  margin-top: 62px;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 62px;
    margin-top: 120px;
  }
`;
