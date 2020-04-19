import React, { FC, ComponentProps } from 'react';
import { Box } from '@chakra-ui/core';

const UL: FC<ComponentProps<typeof Box>> = props => {
  return <Box as="ul" pt="8px" pl="16px" {...props} />;
};

export default UL;
