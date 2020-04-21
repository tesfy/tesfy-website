import React, { FC, ComponentProps } from 'react';
import { useLocation } from '@reach/router';
import { Link } from 'gatsby';
import { Box } from '@chakra-ui/core';

const DocsSideNavLink: FC<ComponentProps<typeof Box> & ComponentProps<typeof Link>> = ({
  to,
  ...others
}) => {
  const { pathname } = useLocation();
  const isActive = to === pathname;

  return (
    <Box
      as={Link}
      display="block"
      fontSize="sm"
      color={isActive ? 'green.500' : 'gray.400'}
      mb={2}
      to={to}
      {...others}
    />
  );
};

export default DocsSideNavLink;
