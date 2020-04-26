import React, { FC, ReactNode, ComponentProps } from 'react';
import Header from './Header';
import Container from './Container';

interface Props {
  footer?: ReactNode;
}

const Layout: FC<ComponentProps<typeof Container> & Props> = ({ footer, ...others }) => {
  return (
    <>
      <Header height="62px" />

      <Container pt="62px" {...others} />

      {footer}
    </>
  );
};

export default Layout;
