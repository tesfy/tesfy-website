import React, { FC, ComponentProps, ReactNode } from 'react';
import { Grid, Box, Flex, Heading, Text } from '@chakra-ui/core';

interface Props {
  title: ReactNode;
  image: ReactNode;
  isReversed?: boolean;
}

const HomeSection: FC<ComponentProps<typeof Grid> & Props> = ({
  title,
  image,
  children,
  isReversed,
  ...others
}) => {
  return (
    <Flex
      as="section"
      flexDirection={{ xs: 'column', md: isReversed ? 'row-reverse' : 'row' }}
      alignItems="center"
      {...others}
    >
      <Flex flex={1} mb={{ xs: 4, md: 0 }} justifyContent="center">
        {image}
      </Flex>

      <Box flex={1} textAlign="center">
        <Heading mb={2}>{title}</Heading>
        <Text>{children}</Text>
      </Box>
    </Flex>
  );
};

export default HomeSection;
