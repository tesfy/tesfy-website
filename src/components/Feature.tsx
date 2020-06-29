import React, { ReactNode, FC } from 'react';
import { Box, Flex, Heading, Text, Icon, BoxProps } from '@chakra-ui/core';

export type FeatureProps = BoxProps & {
  title: ReactNode;
  icon: typeof Icon;
};

const Feature: FC<FeatureProps> = ({ title, icon, children, ...others }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" {...others}>
      <Flex rounded="full" size={12} bg="green.500" align="center" justify="center">
        <Box size={6} color="white" as={icon} />
      </Flex>

      <Heading as="h2" size="md" fontWeight="semibold" mt="1em" mb="0.5em">
        {title}
      </Heading>
      <Text textAlign="center">{children}</Text>
    </Box>
  );
};

export default Feature;
