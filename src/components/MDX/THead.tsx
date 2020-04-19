import React, { FC, ComponentProps } from 'react';
import { useColorMode, Box } from '@chakra-ui/core';

const THead: FC<ComponentProps<typeof Box>> = props => {
  const { colorMode } = useColorMode();
  const bg = { light: 'gray.50', dark: 'whiteAlpha.100' };

  return <Box as="th" bg={bg[colorMode]} fontWeight="semibold" p={2} fontSize="sm" {...props} />;
};

export default THead;
