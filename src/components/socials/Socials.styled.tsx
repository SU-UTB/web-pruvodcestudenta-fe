import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SocialsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
`;

export const SocialLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;
