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
  height: 178px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const ContentCardHeadline = styled.div`
  background: white;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  h4 {
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    color: black;
    padding: 0 12px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
