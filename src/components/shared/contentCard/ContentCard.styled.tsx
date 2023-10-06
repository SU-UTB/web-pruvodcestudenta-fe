import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ContentCardWrapperProps {
  bgColor?: string;
  width?: number;
}

export const ContentCardWrapper = styled.div<ContentCardWrapperProps>`
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : '100%')};
  padding-top: ${({ width }) => (typeof width === 'number' ? 0 : '100%')};
  height: 258px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  background: ${({ bgColor }) => bgColor || '#ffdec9'};
  filter: drop-shadow(-3px -3px 15px rgba(221, 171, 139, 0.5));
  color: black;
`;

export const ContentCardHeadline = styled.h4`
  font-size: 20px;
  padding: 16px 12px;
  text-align: center;
  font-weight: 700;
  background: white;
  width: 100%;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
