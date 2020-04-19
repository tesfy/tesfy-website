import React, { FC, ComponentProps } from 'react';
import { Box } from '@chakra-ui/core';

const LI: FC<ComponentProps<typeof Box>> = props => {
  return <Box as="li" pb="4px" {...props} />;
};

export default LI;
