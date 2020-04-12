import React, { FC } from 'react';
import { Box } from '@chakra-ui/core';
import Header from '../Header';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <Box as="section" pt="62px">
        {children}
      </Box>
    </>
  );
};

export default Layout;
