import React from 'react';
import { theme, ThemeProvider, ColorModeProvider, CSSReset } from '@chakra-ui/core';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <ColorModeProvider value="light">
      <CSSReset />
      {element}
    </ColorModeProvider>
  </ThemeProvider>
);
