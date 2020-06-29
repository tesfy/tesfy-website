import React, { FC } from 'react';
import { Box, BoxProps } from '@chakra-ui/core';

export type CodeBoxProps = BoxProps;

const CodeBox: FC<CodeBoxProps> = props => {
  return <Box fontSize="sm" borderRadius={10} overflow="auto" {...props} />;
};

export default CodeBox;
