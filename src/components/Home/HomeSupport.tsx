import React, { FC } from 'react';
import { Grid, Box } from '@chakra-ui/core';
import { SiJavascript, SiReact, SiSwift, SiKotlin } from 'react-icons/si';
import Hightlight, { HightlightProps } from '../Hightlight';

export type HomeSupportProps = Omit<HightlightProps, 'title' | 'image'>;

const HomeSupport: FC<HomeSupportProps> = props => {
  return (
    <Hightlight title="Supports" {...props}>
      <Grid gap={10} maxW="md" templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)' }}>
        <a href="https://github.com/tesfy/tesfy">
          <Box as={SiJavascript} color="green.500" size="82px" />
        </a>
        <a href="https://github.com/tesfy/react-tesfy">
          <Box as={SiReact} color="green.500" size="82px" />
        </a>
        <a href="https://github.com/tesfy/tesfy-swift">
          <Box as={SiSwift} color="green.500" size="82px" />
        </a>
        <a href="https://github.com/tesfy/tesfy-kotlin">
          <Box as={SiKotlin} color="green.500" size="82px" />
        </a>
      </Grid>
    </Hightlight>
  );
};

export default HomeSupport;
