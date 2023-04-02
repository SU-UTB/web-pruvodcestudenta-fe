import styled from 'styled-components';

export const RectorImageWrapper = styled.img`
  width: 90%;
  max-width: 380px;
  height: 30vh;
  object-fit: cover;
  border-radius: 12px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 519px;
    width: 40%;
    height: 519px;
  }
`;
