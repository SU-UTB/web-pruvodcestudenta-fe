import { Link } from 'react-router-dom';
import styled from 'styled-components';

import orangeImg from '../../assets/images/tables/orange.svg';

type GuideCardWrapperProps = {
  bgColor?: string;
};

export const GuideCardWrapper = styled.div<GuideCardWrapperProps>`
  width: 258px;
  height: 258px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  background: ${({ bgColor }) => bgColor || '#ffdec9'} url(${orangeImg})
    no-repeat center;
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
