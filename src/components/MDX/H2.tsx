import React, { FC, ComponentProps } from 'react';
import { Heading } from '@chakra-ui/core';

const H2: FC<ComponentProps<typeof Heading>> = props => {
  return <Heading as="h2" fontWeight="semibold" size="lg" {...props} />;
};

export default H2;
