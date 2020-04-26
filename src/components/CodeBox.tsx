import React, { FC, ComponentProps } from 'react';
import { Box } from '@chakra-ui/core';

const CodeBox: FC<ComponentProps<typeof Box>> = props => {
  return <Box fontSize="sm" borderRadius={10} overflow="auto" {...props} />;
};

export default CodeBox;
