import Footer from './footer/Footer';
import Header from './header/Header';

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
