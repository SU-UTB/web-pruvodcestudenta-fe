import styled from 'styled-components';

export const SearchInputWrapper = styled.div`
  margin-bottom: 36px;
  border-radius: 47px;
  border: 0.5px solid #c1c1c1;
  box-shadow: 0px 0px 16px -2px rgba(161, 161, 161, 0.3);
  position: relative;
  width: 90%;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 556px;
  }

  button {
    position: absolute;
    top: 0;
    right: 6px;
    width: 50px;
    height: 100%;
    border-radius: 50%;
    cursor: pointer;
    border: none;
    background: none;
  }
`;
