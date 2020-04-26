import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Box, Heading, Text } from '@chakra-ui/core';

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404: Not found" />

      <Box
        height="calc(100vh - 64px)"
        display="flex"
        flexDir="column"
        justifyContent="center"
        textAlign="center"
      >
        <Heading size="2xl">Not found</Heading>

        <Text opacity={0.7} fontSize="lg">
          Oops! we could not find what you were looking for.
        </Text>
      </Box>
    </Layout>
  );
};

export default NotFoundPage;
