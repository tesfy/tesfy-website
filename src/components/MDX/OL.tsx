import React, { FC, ComponentProps } from 'react';
import { Box } from '@chakra-ui/core';

const OL: FC<ComponentProps<typeof Box>> = props => {
  return <Box as="ol" pt="8px" pl="16px" {...props} />;
};

export default OL;
