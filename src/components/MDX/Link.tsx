import React, { FC, ComponentProps } from 'react';
import { PseudoBox } from '@chakra-ui/core';

const Link: FC<ComponentProps<typeof PseudoBox>> = props => {
  return <PseudoBox as="a" color="green.500" cursor="pointer" outline="none" {...props} />;
};

export default Link;
