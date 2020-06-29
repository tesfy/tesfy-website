import React, { FC } from 'react';
import { Grid, Link, GridProps } from '@chakra-ui/core';
import { FiTrendingUp, FiShuffle, FiStar, FiUsers, FiCopy, FiDollarSign } from 'react-icons/fi';
import Feature from '../Feature';

export type HomeFeatureGrid = GridProps;

const HomeFeatureGrid: FC<HomeFeatureGrid> = props => {
  return (
    <Grid
      templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
      gap={10}
      px={{ md: 12 }}
      {...props}
    >
      <Feature icon={FiTrendingUp} title="Performance">
        Since performance plays a major role in the success of any app{' '}
        <Link color="green.500" href="https://bundlephobia.com/result?p=tesfy@1.0.0" isExternal>
          Tesfy
        </Link>{' '}
        is focused to provide the best
      </Feature>

      <Feature icon={FiShuffle} title="Experiments">
        Compare between two or more variations of a change to know which performs better
      </Feature>

      <Feature icon={FiStar} title="Feature Flags">
        Deploy changes under flags and open them progressivily. If something goes wrong just turn
        the flag off
      </Feature>

      <Feature icon={FiUsers} title="Audiences">
        For both experiments and feature flags target a specific group of users based on conditions
        that you specify
      </Feature>

      <Feature icon={FiCopy} title="Sticky Bucketing">
        Ensure a user always sees the same experiment or feature even though traffic allocation and
        atributtes change
      </Feature>

      <Feature icon={FiDollarSign} title="Free">
        The usage of these libraries is totally free and could be customized as you want to fit your
        needs
      </Feature>
    </Grid>
  );
};

export default HomeFeatureGrid;
