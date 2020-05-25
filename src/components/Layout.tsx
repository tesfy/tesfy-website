import React, { FC, ReactNode, ComponentProps } from 'react';
import { Button } from '@chakra-ui/core';
import Header from './Header';
import Container from './Container';

interface Props {
  footer?: ReactNode;
}

const Layout: FC<ComponentProps<typeof Container> & Props> = ({ footer, ...others }) => {
  return (
    <>
      <Header height="62px">
        <Button as="a" ml={2} variantColor="green" href="https://app.tesfy.io">
          Sign in
        </Button>
      </Header>

      <Container pt="62px" {...others} />

      {footer}
    </>
  );
};

export default Layout;
