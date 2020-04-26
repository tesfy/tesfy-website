import React, { FC, ComponentProps } from 'react';
import { Code } from '@chakra-ui/core';

const InlineCode: FC<ComponentProps<typeof Code>> = props => {
  return <Code variantColor="gray" fontSize="0.84em" {...props} />;
};

export default InlineCode;
