import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface CookieLinkProps {
  color?: string;
}

export const CookieContentWrapper = styled.div`
  margin: 1rem 0;
`;

export const CookieLink = styled(Link)<CookieLinkProps>`
  color: ${({ color }) => color || '#000000'};
`;
