import React from 'react';
import { theme, ThemeProvider, ColorModeProvider, CSSReset } from '@chakra-ui/core';
import Prism from 'prism-react-renderer/prism';

(typeof global !== 'undefined' ? global : window).Prism = Prism;

require('prismjs/components/prism-swift');

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <ColorModeProvider value="light">
      <CSSReset />
      {element}
    </ColorModeProvider>
  </ThemeProvider>
);
