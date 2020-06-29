import React, { FC } from 'react';
import { Grid, Box } from '@chakra-ui/core';
import { DiJsBadge, DiReact } from 'react-icons/di';
import Hightlight, { HightlightProps } from '../Hightlight';

export type HomeSupportProps = Omit<HightlightProps, 'title' | 'image'>;

const HomeSupport: FC<HomeSupportProps> = props => {
  return (
    <Hightlight title="Supports" {...props}>
      <Grid gap={10} maxW="md" templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}>
        <Box as={DiJsBadge} color="green.500" size="82px" />
        <Box as={DiReact} color="green.500" size="82px" />
      </Grid>
    </Hightlight>
  );
};

export default HomeSupport;
