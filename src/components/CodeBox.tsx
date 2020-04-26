import React, { FC, ComponentProps } from 'react';
import { Box } from '@chakra-ui/core';

const CodeBox: FC<ComponentProps<typeof Box>> = props => {
  return <Box p={6} fontSize="sm" borderRadius={10} {...props} />;
};

export default CodeBox;
