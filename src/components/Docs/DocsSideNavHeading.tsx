import React, { FC, ComponentProps } from 'react';
import { Heading } from '@chakra-ui/core';

const DocsSideNavHeading: FC<ComponentProps<typeof Heading>> = props => {
  return <Heading fontSize="sm" letterSpacing="wide" mb={2} textTransform="uppercase" {...props} />;
};

export default DocsSideNavHeading;
