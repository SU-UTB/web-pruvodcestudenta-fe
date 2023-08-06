import styled from 'styled-components';

export const SectionSplashWrapper = styled.section<{ backgroundColor: string }>`
  height: 280px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  justify-content: center;
  align-items: end;
`;
