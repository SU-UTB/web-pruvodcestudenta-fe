import styled from 'styled-components';

export const SplashWrapper = styled.section`
  height: 300px;
  background: url('./utb-rektorat.webp'), rgba(0, 0, 0, 0.6);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-blend-mode: multiply;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  padding: 0 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 540px;
  }

  p {
    text-align: center;
    margin-bottom: 62px;
  }
`;
