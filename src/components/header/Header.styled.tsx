import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  height: 60px;
  max-width: 100%;
  padding: 0 60px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const HeaderItem = styled.a`
  text-decoration: none;
  display: block;
  color: black;
`;

export const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0 60px;
`;

export const AppLogo = styled.div`
  display: flex;
  align-items: center;
  display: flex;
  cursor: pointer;
  gap: 0 30px;
`;
