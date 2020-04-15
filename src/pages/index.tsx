import React from 'react';
import { Box, Divider, Grid } from '@chakra-ui/core';
import { MdAccessibility, MdPalette, MdGrain } from 'react-icons/md';
import Layout from '../components/Layout';
import HomeBanner from '../components/HomeBanner';
import HomeCode from '../components/HomeCode';
import HomeFeature from '../components/HomeFeature';

function IndexPage() {
  return (
    <Layout>
      <Box maxW="lg" my={12} mx="auto">
        <HomeBanner mb={8} />

        <HomeCode />
      </Box>

      <Divider />

      <Grid
        templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
        gap={10}
        px={{ md: 12 }}
        my={12}
      >
        <HomeFeature icon={MdAccessibility} title="Accessible">
          Chakra UI strictly follows WAI-ARIA standards. All components come with proper attributes
          and keyboard interactions out of the box.
        </HomeFeature>

        <HomeFeature icon={MdPalette} title="Themeable">
          Quickly and easily reference values from your theme throughout your entire application, on
          any component.
        </HomeFeature>
        <HomeFeature icon={MdGrain} title="Composable">
          Components were built with composition in mind. You can leverage any component to create
          new things.
        </HomeFeature>
      </Grid>
    </Layout>
  );
}

export default IndexPage;
