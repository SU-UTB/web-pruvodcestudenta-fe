import styled from 'styled-components';

export const TagsWrapperStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px 50px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    justify-content: start;
    gap: 36px 100px;
    max-width: ${({ theme }) => theme.breakpoints.desktop};
  }
`;
