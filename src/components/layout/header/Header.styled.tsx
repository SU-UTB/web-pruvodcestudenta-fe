import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface LinksWrapperProps {
  isOpen: boolean;
}

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
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 60px;
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

export const AppLogo = styled.div`
  display: flex;
  align-items: center;
  align-self: start;
  cursor: pointer;
  gap: 0 30px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-self: center;
  }
`;
