import React, { ReactNode, FC, ComponentProps } from 'react';
import { Box, Flex, Heading, Text, Icon } from '@chakra-ui/core';

interface Props {
  title: ReactNode;
  icon: typeof Icon;
}

const HomeFeature: FC<ComponentProps<typeof Box> & Props> = ({
  title,
  icon,
  children,
  ...others
}) => {
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

export default HomeFeature;
