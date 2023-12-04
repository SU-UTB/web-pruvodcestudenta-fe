import styled from 'styled-components';

export const RectorImageWrapper = styled.img`
  width: 100%;
  max-width: 360px;
  height: 30vh;
  object-fit: cover;
  border-radius: 12px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 519px;
    height: 519px;
  }
`;
