import React, { FC, ComponentProps } from 'react';
import { Box } from '@chakra-ui/core';

const TData: FC<ComponentProps<typeof Box>> = props => {
  return (
    <Box
      as="td"
      p={2}
      borderTopWidth="1px"
      borderColor="inherit"
      fontSize="sm"
      whiteSpace="normal"
      {...props}
    />
  );
};

export default TData;
