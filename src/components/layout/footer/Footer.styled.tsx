import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  width: 100%;
  padding: 20px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: auto;
  gap: 1rem;
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

export const FooterAppSection = styled.div`
  margin: 1rem 0;

  h4 {
    margin-bottom: 0.6rem;
    text-align: center;
  }
`;

export const FooterCopyright = styled.p`
  margin-top: 2rem;
`;
