import React, { FC, ComponentProps } from 'react';
import Header from './Header';
import Container from './Container';

const Layout: FC<ComponentProps<typeof Container>> = props => {
  return (
    <>
      <Header height="62px" />

      <Container pt="62px" {...props} />
    </>
  );
};

export default Layout;
