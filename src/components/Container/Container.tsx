import React, { FC, ComponentProps } from 'react';
import { Box } from '@chakra-ui/core';

const Layout: FC<ComponentProps<typeof Box>> = ({ children, ...others }) => {
  return (
    <>
      <Box as="section" width="full" maxWidth="1280px" mx="auto" px={{ xs: 3, md: 6 }} {...others}>
        {children}
      </Box>
    </>
  );
};

export default Layout;
