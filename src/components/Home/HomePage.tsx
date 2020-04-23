import React from 'react';
import { Box, Divider } from '@chakra-ui/core';
import SEO from '../SEO';
import HomeBanner from './HomeBanner';
import HomeMissionSection from './HomeMissionSection';
import HomeSupportSection from './HomeSupportSection';
import HomeCodeBlock from './HomeCodeBlock';
import HomeFeatureGrid from './HomeFeatureGrid';

const HomePage = () => {
  return (
    <>
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
    </>
  );
};

export default HomePage;
