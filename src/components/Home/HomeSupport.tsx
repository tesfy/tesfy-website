import React, { FC } from 'react';
import { Grid, Box } from '@chakra-ui/core';
import { DiJsBadge, DiReact, DiApple, DiAndroid } from 'react-icons/di';
import Hightlight, { HightlightProps } from '../Hightlight';

export type HomeSupportProps = Omit<HightlightProps, 'title' | 'image'>;

const HomeSupport: FC<HomeSupportProps> = props => {
  return (
    <Hightlight title="Supports" {...props}>
      <Grid gap={10} maxW="md" templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}>
        <a href="https://github.com/tesfy/tesfy">
          <Box as={DiJsBadge} color="green.500" size="82px" />
        </a>
        <a href="https://github.com/tesfy/react-tesfy">
          <Box as={DiReact} color="green.500" size="82px" />
        </a>
        <a href="https://github.com/tesfy/tesfy-swift">
          <Box as={DiApple} color="green.500" size="82px" />
        </a>
        <a href="https://github.com/tesfy/tesfy-kotlin">
          <Box as={DiAndroid} color="green.500" size="82px" />
        </a>
      </Grid>
    </Hightlight>
  );
};

export default HomeSupport;
