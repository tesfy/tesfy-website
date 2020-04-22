import React from 'react';
import { Box, Divider, Link, Grid, Heading, Text } from '@chakra-ui/core';
import { FiTrendingUp, FiShuffle, FiStar, FiUsers, FiCopy, FiDollarSign } from 'react-icons/fi';
import { DiJsBadge, DiReact } from 'react-icons/di';
import SEO from '../SEO';
import HomeBanner from './HomeBanner';
import HomeCodeBlock from './HomeCodeBlock';
import HomeFeature from './HomeFeature';

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
        <Grid
          templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
          gap={10}
          px={{ md: 12 }}
          textAlign="center"
        >
          <Heading>The mission</Heading>
          <Text>
            Provide a library of{' '}
            <Text as="b" color="green.500">
              easy use
            </Text>{' '}
            and{' '}
            <Text as="b" color="green.500">
              configuration
            </Text>
            . Where the whole community can contribute to make it better every day. And additionally
            provide the{' '}
            <Text as="b" color="green.500">
              best performance
            </Text>
            .
          </Text>
        </Grid>

        <Box mt={4} display="flex" flexDirection="column" alignItems="center">
          <Heading>Supports</Heading>

          <Grid
            mt={6}
            gap={10}
            maxWidth="300px"
            templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
          >
            <Box as={DiJsBadge} mr={4} color="green.500" size="82px" />
            <Box as={DiReact} color="green.500" size="82px" />
          </Grid>
        </Box>
      </Box>

      <Divider />

      <Grid
        templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
        gap={10}
        px={{ md: 12 }}
        my={8}
      >
        <HomeFeature icon={FiTrendingUp} title="Performance">
          Since performance plays a major role in the success of any app{' '}
          <Link color="green.500" href="https://bundlephobia.com/result?p=tesfy@1.0.0" isExternal>
            Tesfy
          </Link>{' '}
          is focused to provide the best
        </HomeFeature>

        <HomeFeature icon={FiShuffle} title="Experiments">
          Compare between two or more variations of a change to know which performs better
        </HomeFeature>

        <HomeFeature icon={FiStar} title="Feature Flags">
          Deploy changes under flags and open them progressivily. If something goes wrong just turn
          the flag off
        </HomeFeature>

        <HomeFeature icon={FiUsers} title="Audiences">
          For both experiments and feature flags target a specific group of users based on
          conditions that you specify
        </HomeFeature>

        <HomeFeature icon={FiCopy} title="Sticky Bucketing">
          Ensure a user always sees the same experiment or feature even though traffic allocation
          and atributtes change
        </HomeFeature>

        <HomeFeature icon={FiDollarSign} title="Free">
          The usage of these libraries is totally free and could be customized as you want to fit
          your needs
        </HomeFeature>
      </Grid>
    </>
  );
};

export default HomePage;
