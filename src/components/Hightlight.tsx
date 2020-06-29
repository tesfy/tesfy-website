import React, { FC, ReactNode } from 'react';
import { Flex, Text, Heading, FlexProps } from '@chakra-ui/core';

export type HightlightProps = FlexProps & {
  title: ReactNode;
  image?: ReactNode;
  description?: ReactNode;
};

const Hightlight: FC<HightlightProps> = ({ image, title, description, children, ...others }) => {
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center" {...others}>
      {image}

      <Heading fontSize="1.75rem" my={6} borderBottom="2px" borderBottomColor="green.500">
        {title}
      </Heading>

      {description && <Text textAlign="center">{description}</Text>}

      {children}
    </Flex>
  );
};

export default Hightlight;
