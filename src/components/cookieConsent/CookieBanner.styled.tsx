import styled from 'styled-components';

export const CookieBannerWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  padding: 2rem;
  z-index: 2;
`;

export const CookieButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;
