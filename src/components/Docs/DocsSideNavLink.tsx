import React, { FC, ComponentProps } from 'react';
import { useLocation } from '@reach/router';
import { Link } from 'gatsby';
import { Box } from '@chakra-ui/core';
import SEO from '../SEO';

const DocsSideNavLink: FC<ComponentProps<typeof Box> & ComponentProps<typeof Link>> = ({
  to,
  title,
  ...others
}) => {
  const { pathname } = useLocation();
  const isActive = to === pathname;

  return (
    <>
      {isActive && title && <SEO title={title} />}

      <Box
        as={Link}
        aria-current={isActive ? 'page' : undefined}
        display="block"
        fontSize="sm"
        color={isActive ? 'green.500' : 'gray.400'}
        mb={2}
        to={to}
        title={title}
        {...others}
      />
    </>
  );
};

export default DocsSideNavLink;
