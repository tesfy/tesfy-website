import React, { FC, ComponentProps } from 'react';
import { Link } from 'gatsby';
import { Box } from '@chakra-ui/core';

interface Props {
  isActive?: boolean;
}

const DocsSideNavLink: FC<ComponentProps<typeof Box> & ComponentProps<typeof Link> & Props> = ({
  isActive,
  ...others
}) => {
  return (
    <Box as={Link} fontSize="sm" color={isActive ? 'green.500' : 'gray.400'} mb={2} {...others} />
  );
};

export default DocsSideNavLink;
