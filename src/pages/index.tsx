import React from 'react';
import { Box, Divider, Heading, Text } from '@chakra-ui/core';
import RocketIcon from '@/assets/rocket.svg';
import ChartIcon from '@/assets/chart.svg';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import HomeBanner from '../components/Home/HomeBanner';
import HomeSection from '../components/Home/HomeSection';
import HomeSupportSection from '../components/Home/HomeSupportSection';
import HomeCodeBlock from '../components/Home/HomeCodeBlock';
import HomeFeatureGrid from '../components/Home/HomeFeatureGrid';

const HomePage = () => {
  return (
    <Layout footer={<Footer />}>
      <SEO title="A/B Testing and Feature Flags" />

      <Box maxW="lg" my={8} mx="auto">
        <HomeBanner mb={8} />

        <HomeCodeBlock>
          <Box mb={4} textAlign="center">
            <Heading mb={2} as="h2" size="lg">
              Web Application
            </Heading>

            <Text>
              Easily configure your experimentation strategy for{' '}
              <Text as="b" opacity={1} color="green.500">
                free
              </Text>{' '}
              using our Web Application.{' '}
              <Text as="b" opacity={1} color="green.500">
                Unlimited
              </Text>{' '}
              projects, experiments and features can be created. Give it a try ✨
            </Text>
          </Box>
        </HomeCodeBlock>
      </Box>

      <Divider />

      <Box my={8}>
        <HomeSection
          mb={8}
          image={<Box as={RocketIcon} height="200px" width="auto" />}
          title="Ship faster feeling safer"
        >
          Release new features that are still under development and after being finished safely test
          them while rapidly collecting valuable user feedback
        </HomeSection>

        <HomeSection
          mb={8}
          image={<Box as={ChartIcon} height="200px" width="auto" />}
          title="Take the best decision"
          isReversed
        >
          Test conversion rates for changes in your application and meseaure them to always know
          which one generates more conversions over time
        </HomeSection>

        <HomeSupportSection />
      </Box>

      <Divider />

      <HomeFeatureGrid />
    </Layout>
  );
};

export default HomePage;
