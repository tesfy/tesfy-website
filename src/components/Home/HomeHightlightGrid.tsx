import React, { FC } from 'react';
import { Grid, Box, GridProps } from '@chakra-ui/core';
import RocketIcon from '@/assets/svgs/rocket.svg';
import ChartIcon from '@/assets/svgs/chart.svg';
import Hightlight from '../Hightlight';

export type HomeHightlightGridProps = GridProps;

const HomeHightlightGrid: FC<HomeHightlightGridProps> = props => {
  return (
    <Grid
      templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={10}
      px={{ md: 12 }}
      {...props}
    >
      <Hightlight
        image={<Box as={RocketIcon} height="200px" width="auto" />}
        title="Ship faster feeling safer"
        description="Release new features that are still under development and after being finished safely test
        them while rapidly collecting valuable user feedback"
      />

      <Hightlight
        image={<Box as={ChartIcon} height="200px" width="auto" />}
        title="Take the best decision"
        description="Test conversion rates for changes in your application and meseaure them to always know which
        one generates more conversions over time"
      />
    </Grid>
  );
};

export default HomeHightlightGrid;
