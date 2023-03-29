import styled from 'styled-components';

const HeaderWrapper = styled.div`
  margin-top: 48px;
  margin-bottom: 48px;
  text-align: center;
`;

const P = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 108%;
`;

export const PresetsHeader = () => (
  <HeaderWrapper>
    <P>Nevíš kudy kam? To je v pořádku.</P>
    <P>Přečti si vše důležité o UTB zde.</P>
  </HeaderWrapper>
);
