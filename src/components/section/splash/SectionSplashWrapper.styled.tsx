import styled from 'styled-components';

type Props = {
  bgColor: string;
  bgImg?: string;
};

export const SectionSplashWrapper = styled.section<Props>`
  height: 320px;
  background: ${({ bgColor, bgImg }) => (bgImg ? `url(${bgImg})` : bgColor)};
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: end;
`;
