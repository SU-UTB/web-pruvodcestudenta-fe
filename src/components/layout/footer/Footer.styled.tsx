import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 60px;
  padding: 0 20px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    padding: 0 60px;
  }
`;
