import React, { FC, ComponentProps } from 'react';
import { Box, Heading, Grid } from '@chakra-ui/core';
import { DiJsBadge, DiReact } from 'react-icons/di';

const HomeMissionSection: FC<ComponentProps<typeof Box>> = props => {
  return (
    <Box as="section" display="flex" flexDirection="column" alignItems="center" {...props}>
      <Heading>Supports</Heading>

      <Grid
        mt={6}
        gap={10}
        maxW="md"
        templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      >
        <Box as={DiJsBadge} mr={4} color="green.500" size="82px" />
        <Box as={DiReact} color="green.500" size="82px" />
      </Grid>
    </Box>
  );
};

export default HomeMissionSection;
