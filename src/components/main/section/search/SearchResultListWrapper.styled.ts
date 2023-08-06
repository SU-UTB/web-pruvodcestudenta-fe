import styled from 'styled-components';

export const SearchResultListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 90%;
  border-radius: 47px;
  border: 0.5px solid #c1c1c1;
  box-shadow: 0px 0px 16px -2px rgba(161, 161, 161, 0.3);
  max-height: 400px;
  overflow-y: auto;
  padding: 1.5rem 3rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 556px;
  }
`;
