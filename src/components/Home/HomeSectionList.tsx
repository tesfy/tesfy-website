import React, { FC, ComponentProps } from 'react';
import { Box, Grid } from '@chakra-ui/core';
import { DiJsBadge, DiReact } from 'react-icons/di';
import RocketIcon from '@/assets/rocket.svg';
import ChartIcon from '@/assets/chart.svg';
import HomeSection from './HomeSection';

const HomeSectionList: FC<ComponentProps<typeof Box>> = props => {
  return (
    <Box {...props}>
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
        Test conversion rates for changes in your application and meseaure them to always know which
        one generates more conversions over time
      </HomeSection>

      <HomeSection title="Supports">
        <Grid gap={10} maxW="md" templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}>
          <Box as={DiJsBadge} color="green.500" size="82px" />
          <Box as={DiReact} color="green.500" size="82px" />
        </Grid>
      </HomeSection>
    </Box>
  );
};

export default HomeSectionList;
