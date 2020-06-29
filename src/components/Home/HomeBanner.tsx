import React, { FC } from 'react';
import { Link } from 'gatsby';
import { Box, Text, Button, Heading, BoxProps } from '@chakra-ui/core';
import { FiGithub } from 'react-icons/fi';
import Sparkles from '../Sparkles';
import LogoIcon from '@/assets/svgs/logo.svg';

export type HomeBannerProps = BoxProps;

const HomeBanner: FC<HomeBannerProps> = props => {
  return (
    <Box textAlign="center" {...props}>
      <Box display="flex" justifyContent="center">
        <Sparkles>
          <Box as={LogoIcon} height="100px" width="auto" fill="green.500" />
        </Sparkles>
      </Box>

      <Box my={4}>
        <Heading as="h1" fontSize="1.75rem" color="grey.500" fontWeight="bold" mb={2}>
          A/B Testing and Feature Flags
        </Heading>

        <Text opacity={0.7} fontSize="lg">
          Ship faster taking data-driven decisions with a set of libraries focused on performance
          for <b>free</b>
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
