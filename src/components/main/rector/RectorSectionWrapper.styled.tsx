import styled from 'styled-components';

export const RectorSectionWrapper = styled.section`
  display: grid;
  padding: 0 1rem;
  max-width: 1200px;
  margin: 60px auto;
  gap: 24px;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
