import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ContentCardWrapperProps {
  width?: number;
}

export const ContentCardWrapper = styled.div<ContentCardWrapperProps>`
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : '100%')};
  max-width: 260px;
  height: 258px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  filter: drop-shadow(-3px -3px 15px rgba(221, 171, 139, 0.5));
  position: relative;
`;

export const ContentCardBgIcon = styled.div<{ bgColor?: string }>`
  background: ${({ bgColor }) => bgColor || '#ffdec9'};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  img {
    object-fit: contain;
  }
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
  justify-self: end;
  color: black;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
