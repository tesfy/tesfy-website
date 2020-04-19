import React, { FC, ComponentProps } from 'react';
import { Box } from '@chakra-ui/core';

const Table: FC<ComponentProps<typeof Box>> = props => {
  return <Box as="table" textAlign="left" mt="32px" width="full" {...props} />;
};

export default Table;
