import React, { FC, ComponentProps } from 'react';
import { Text } from '@chakra-ui/core';

const P: FC<ComponentProps<typeof Text>> = props => {
  return <Text as="p" mt={4} lineHeight="tall" {...props} />;
};

export default P;
