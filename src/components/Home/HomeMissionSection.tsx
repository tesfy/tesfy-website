import React, { FC, ComponentProps } from 'react';
import { Grid, Heading, Text } from '@chakra-ui/core';

const HomeMissionSection: FC<ComponentProps<typeof Grid>> = props => {
  return (
    <Grid
      as="section"
      templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={4}
      textAlign="center"
      {...props}
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
  );
};

export default HomeMissionSection;
