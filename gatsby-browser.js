import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { ColorModeProvider } from '@chakra-ui/core';
import components from './src/components/MDX';

export const wrapRootElement = ({ element }) => (
  <ColorModeProvider>
    <MDXProvider components={components}>{element}</MDXProvider>
  </ColorModeProvider>
);
