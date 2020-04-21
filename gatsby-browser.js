import React from 'react';
import { ColorModeProvider } from '@chakra-ui/core';

export const wrapRootElement = ({ element }) => <ColorModeProvider>{element}</ColorModeProvider>;
