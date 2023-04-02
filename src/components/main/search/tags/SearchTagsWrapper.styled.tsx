import styled from 'styled-components';

export const SearchTagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 100px;
  row-gap: 36px;
  max-width: 1200px;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: start;
  }
`;
