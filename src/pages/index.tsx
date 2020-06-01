import React from 'react';
import { Box, Divider } from '@chakra-ui/core';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import HomeBanner from '../components/Home/HomeBanner';
import HomeCodeBlock from '../components/Home/HomeCodeBlock';
import HomeSectionList from '../components/Home/HomeSectionList';
import HomeFeatureGrid from '../components/Home/HomeFeatureGrid';

const HomePage = () => {
  return (
    <Layout footer={<Footer />}>
      <SEO title="A/B Testing and Feature Flags" />

      <Box maxW="lg" my={8} mx="auto">
        <HomeBanner mb={8} />

        <HomeCodeBlock />
      </Box>

      <Divider />

      <HomeSectionList my={8} />

      <Divider />

      <HomeFeatureGrid />
    </Layout>
  );
};

export default HomePage;
