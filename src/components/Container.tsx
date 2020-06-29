import React, { FC } from 'react';
import { Box, BoxProps } from '@chakra-ui/core';

export type ContainerProps = BoxProps;

const Container: FC<ContainerProps> = ({ children, ...others }) => {
  return (
    <Box width="full" maxW="1280px" mx="auto" px={{ xs: 3, md: 6 }} {...others}>
      {children}
    </Box>
  );
};

export default Container;
