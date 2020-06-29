import React from 'react';
import { Box, Divider } from '@chakra-ui/core';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import HomeBanner from '../components/Home/HomeBanner';
import HomePreview from '../components/Home/HomePreview';
import HomeHightlightGrid from '../components/Home/HomeHightlightGrid';
import HomeFeatureGrid from '../components/Home/HomeFeatureGrid';
import HomeSupport from '../components/Home/HomeSupport';

const HomePage = () => {
  return (
    <Layout footer={<Footer />}>
      <SEO title="A/B Testing and Feature Flags" />

      <Box maxW="lg" my={8} mx="auto">
        <HomeBanner mb={12} />

        <HomePreview />
      </Box>

      <Divider />

      <HomeHightlightGrid my={12} />

      <HomeSupport my={12} />

      <Divider />

      <HomeFeatureGrid my={12} />
    </Layout>
  );
};

export default HomePage;
