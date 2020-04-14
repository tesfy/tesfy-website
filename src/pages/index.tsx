import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import { Text, Box, Button, Heading } from '@chakra-ui/core';

function IndexPage() {
  return (
    <Layout>
      <Box
        minH="320px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Box maxW="lg">
          <Box display="flex" justifyContent="center">
            <Logo size="200px" />
          </Box>

          <Text opacity={0.7} fontSize="lg" mt="4">
            A lightweight A/B Testing and Feature Flag JavaScript library focused on performance ⚡️
          </Text>

          <Box mt="4">
            <Button size="md" as={Link} to="/docs" variantColor="green" m={2}>
              Get Started
            </Button>
            <Button as="a" size="md" m={2}>
              GitHub
            </Button>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}

export default IndexPage;
