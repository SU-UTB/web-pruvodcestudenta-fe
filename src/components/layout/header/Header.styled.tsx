import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface LinksWrapperProps {
  isOpen: boolean;
}

export const HeaderWrapper = styled.header`
  min-height: 60px;
  max-width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 0 0 16px 16px;
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 60px;
    justify-content: space-between;
  }
`;

export const HeaderLink = styled(Link)`
  text-decoration: none;
  display: block;
  color: black;
`;

export const LinksWrapper = styled.div<LinksWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px 0;
  position: absolute;
  transition: transform 0.3s ease-in-out;
  top: 60px;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '100vw')});
  width: 100%;
  background: #ffffff;
  padding: 20px 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    transform: translateX(0);
    flex-direction: row;
    gap: 0 60px;
    position: static;
    width: auto;
    background: none;
  }
`;

export const AppLogo = styled.a`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  gap: 6px;
  text-decoration: none;
  color: black;

  img {
    max-width: fit-content;
  }
`;

export const LogoHamburgerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: max-content;
    padding: 0;
  }
`;
