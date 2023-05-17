import { Link } from 'react-router-dom';
import styled from 'styled-components';

import orange from '../../assets/images/tables/orange.svg';

export const GuideCardWrapper = styled.div`
  width: 258px;
  min-height: 258px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  background: #ffdec9 url(${orange}) no-repeat center;
  filter: drop-shadow(-3px -3px 15px rgba(221, 171, 139, 0.5));
  color: black;
  text-decoration: none;
`;

export const GuideCardHeadline = styled.h4`
  font-size: 20px;
  padding: 16px 12px;
  text-align: center;
  font-weight: 700;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
