import styled from 'styled-components';
import Footer from './footer/Footer';
import Header from './header/Header';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  justify-content: center;
`;

interface Props {
  children: React.ReactNode;
}

export const BaseLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
