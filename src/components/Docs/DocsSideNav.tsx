import React, { FC, ComponentProps } from 'react';
import { Box } from '@chakra-ui/core';

const DocsSideNav: FC<ComponentProps<typeof Box>> = props => {
  return (
    <Box
      position="fixed"
      left="0"
      width="100%"
      height="100%"
      right="0"
      overflowY="auto"
      borderRightWidth="1px"
      {...props}
    />
  );
};

export default DocsSideNav;
