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
  border-radius: 28px;
  background: #fff;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  max-width: 600px;
  width: 90%;
`;

export const CookieButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;
