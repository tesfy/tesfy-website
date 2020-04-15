import React, { FC } from 'react';
import Header from '../Header';
import Container from '../Container';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />

      <Container>{children}</Container>
    </>
  );
};

export default Layout;
