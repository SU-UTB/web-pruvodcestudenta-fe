import styled from 'styled-components';

export const RectorTextWrapper = styled.article`
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    max-width: 400px;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 20px;
      max-width: 500px;
    }
  }
`;
