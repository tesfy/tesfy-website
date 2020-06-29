import React, { FC } from 'react';
import { useColorMode, Box, Text, Link, BoxProps } from '@chakra-ui/core';
import { FiHeart } from 'react-icons/fi';
import Container from './Container';

export type FooterProps = BoxProps;

const Footer: FC<FooterProps> = props => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'gray.100', dark: 'gray.700' };

  return (
    <Box as="footer" py={12} backgroundColor={bgColor[colorMode]} textAlign="center" {...props}>
      <Container>
        <Text fontSize="sm">Released under the MIT License. Copyright © 2020 Tesfy.</Text>

        <Text fontSize="sm">
          Made with <Box as={FiHeart} display="inline" color="red.500" fill="red.500" /> by{' '}
          <Link color="green.500" href="https://github.com/andresz1" isExternal>
            @andresz1
          </Link>
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
