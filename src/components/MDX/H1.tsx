import React, { FC, ComponentProps } from 'react';
import { Heading } from '@chakra-ui/core';

const H1: FC<ComponentProps<typeof Heading>> = props => {
  return <Heading as="h1" size="xl" my="1em" {...props} />;
};

export default H1;
