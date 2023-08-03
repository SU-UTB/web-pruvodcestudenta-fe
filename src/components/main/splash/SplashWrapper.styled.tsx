import styled from 'styled-components';

export const SplashWrapper = styled.section`
  height: 300px;
  background-color: #ff9f63;
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
