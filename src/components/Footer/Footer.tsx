import React from 'react';
import { useColorMode, Box, Text, Link } from '@chakra-ui/core';
import { FiHeart } from 'react-icons/fi';
import Container from '../Container';

const Footer = () => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'gray.50', dark: 'gray.700' };

  return (
    <Box as="footer" py={12} backgroundColor={bgColor[colorMode]} textAlign="center">
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
