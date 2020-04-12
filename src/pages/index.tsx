import React from 'react';
import Layout from '../components/Layout';
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
          <Heading as="h1" size="xl" fontWeight="semibold">
            Testfy
          </Heading>

          <Text opacity={0.7} fontSize="lg" mt="4">
            A lightweight A/B Testing and Feature Flag JavaScript library focused on performance ⚡️
          </Text>

          <Box mt="4">
            <Button size="lg" as="a" variantColor="teal" m={2}>
              Get Started
            </Button>
            <Button as="a" size="lg" m={2}>
              GitHub
            </Button>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}

export default IndexPage;
