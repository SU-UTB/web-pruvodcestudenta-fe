import styled from 'styled-components';

export const SplashWrapper = styled.section<{ backgroundColor: string }>`
  height: 307px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  justify-content: center;
  align-items: end;
`;
