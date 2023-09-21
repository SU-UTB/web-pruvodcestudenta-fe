import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SearchResultItemStyled = styled(Link)`
  text-decoration: none;
  padding: 0.8rem 3rem;
  color: black;
  transition: background-color 0.1s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightOrange};
  }
`;
