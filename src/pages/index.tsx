import React from 'react';
import { Box, Divider } from '@chakra-ui/core';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import HomeBanner from '../components/Home/HomeBanner';
import HomeMissionSection from '../components/Home/HomeMissionSection';
import HomeSupportSection from '../components/Home/HomeSupportSection';
import HomeCodeBlock from '../components/Home/HomeCodeBlock';
import HomeFeatureGrid from '../components/Home/HomeFeatureGrid';

const HomePage = () => {
  return (
    <Layout>
      <SEO title="A/B Testing and Feature Flag" />

      <Box maxW="lg" my={8} mx="auto">
        <HomeBanner mb={8} />

        <HomeCodeBlock />
      </Box>

      <Divider />

      <Box my={8}>
        <HomeMissionSection mb={8} />

        <HomeSupportSection />
      </Box>

      <Divider />

      <HomeFeatureGrid />

      <Footer />
    </Layout>
  );
};

export default HomePage;
