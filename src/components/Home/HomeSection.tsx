import React, { FC, ComponentProps, ReactNode } from 'react';
import { Grid, Flex, Heading } from '@chakra-ui/core';

interface Props {
  title: ReactNode;
  image?: ReactNode;
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
      {image && (
        <Flex flex={1} mb={{ xs: 4, md: 0 }} justifyContent="center">
          {image}
        </Flex>
      )}

      <Flex flex={1} flexDirection="column" alignItems="center" textAlign="center">
        <Heading mb={2}>{title}</Heading>
        {children}
      </Flex>
    </Flex>
  );
};

export default HomeSection;
