import styled from 'styled-components';

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 47px;
  font-size: 16px;
  border: none;
  padding: 20px 25px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 18px;
  }

  &:focus {
    outline: none;
  }
`;
