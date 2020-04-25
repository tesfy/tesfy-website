import React, { FC } from 'react';
import Header from './Header';
import Container from './Container';
import Footer from './Footer';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header height="62px" />

      <Container pt="62px">{children}</Container>

      <Footer />
    </>
  );
};

export default Layout;