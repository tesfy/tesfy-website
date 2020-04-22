import React, { FC, ComponentProps } from 'react';
import { Link } from 'gatsby';
import { Box, Text, Button, Heading } from '@chakra-ui/core';
import { FiGithub } from 'react-icons/fi';
import LogoIcon from '@/assets/logo.svg';

const HomeBanner: FC<ComponentProps<typeof Box>> = props => {
  return (
    <Box textAlign="center" {...props}>
      <Box display="flex" justifyContent="center">
        <Box as={LogoIcon} height="100px" width="auto" fill="green.500" />
      </Box>

      <Box my={4}>
        <Heading as="h1" size="lg" color="grey.500" fontWeight="bold">
          A/B Testing and Feature Flag
        </Heading>

        <Text opacity={0.7} fontSize="lg">
          JavaScript library focused on performance ⚡️
        </Text>
      </Box>

      <Box mt={6}>
        <Button as={Link} to="/docs" mx={2} size="md" variantColor="green" isRound>
          Get Started
        </Button>
        <Button
          as="a"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/andresz1/tesfy"
          mx={2}
          size="md"
          variant="outline"
          variantColor="green"
          leftIcon={FiGithub}
        >
          GitHub
        </Button>
      </Box>
    </Box>
  );
};

export default HomeBanner;
