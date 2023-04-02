import styled from 'styled-components';

export const RectorSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  max-width: 1600px;
  margin: 60px auto;
  gap: 24px;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: 82px;
  }
`;
