import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  height: 60px;
  max-width: 100%;
  padding: 0 20px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  border-radius: 0 0 16px 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 60px;
  }
`;

export const HeaderItem = styled.a`
  text-decoration: none;
  display: block;
  color: black;
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px 0;
  position: absolute;
  top: 60px;
  width: 100%;
  background: #ffffff;
  padding: 20px 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: 0 60px;
    position: relative;
    top: 0;
    width: auto;
    background: none;
  }
`;

export const AppLogo = styled.div`
  display: flex;
  align-items: center;
  display: flex;
  cursor: pointer;
  gap: 0 30px;
`;
