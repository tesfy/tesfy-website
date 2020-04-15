import React, { FC, ComponentProps } from 'react';
import { Link } from 'gatsby';
import { Box, Text, Button } from '@chakra-ui/core';
import LogoIcon from '@/assets/logo.svg';

const HomeBanner: FC<ComponentProps<typeof Box>> = props => {
  return (
    <Box textAlign="center" {...props}>
      <Box display="flex" justifyContent="center">
        <Box as={LogoIcon} height="100px" width="auto" fill="green.500" />
      </Box>

      <Text opacity={0.7} fontSize="lg" mt="4">
        A lightweight A/B Testing and Feature Flag JavaScript library focused on performance ⚡️
      </Text>

      <Box mt="4">
        <Button size="md" as={Link} to="/docs" variantColor="green" m={2} isRound>
          Get Started
        </Button>
        <Button
          as="a"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/andresz1/tesfy"
          variant="outline"
          variantColor="green"
          size="md"
          m={2}
        >
          GitHub
        </Button>
      </Box>
    </Box>
  );
};

export default HomeBanner;
