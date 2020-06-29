import React, { FC } from 'react';
import { Box, BoxProps } from '@chakra-ui/core';

export type DocsSideNavProps = BoxProps;

const DocsSideNav: FC<DocsSideNavProps> = props => {
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
