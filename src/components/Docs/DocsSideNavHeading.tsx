import React, { FC } from 'react';
import { Heading, HeadingProps } from '@chakra-ui/core';

export type DocsSideNavHeadingProps = HeadingProps;

const DocsSideNavHeading: FC<DocsSideNavHeadingProps> = props => {
  return <Heading fontSize="sm" letterSpacing="wide" mb={2} textTransform="uppercase" {...props} />;
};

export default DocsSideNavHeading;
