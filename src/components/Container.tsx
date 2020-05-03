import React, { FC, ComponentProps } from 'react';
import { Box } from '@chakra-ui/core';

const Container: FC<ComponentProps<typeof Box>> = ({ children, ...others }) => {
  return (
    <Box width="full" maxW="1280px" mx="auto" px={{ xs: 3, md: 6 }} {...others}>
      {children}
    </Box>
  );
};

export default Container;
