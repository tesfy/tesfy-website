import React, { FC, ComponentProps } from 'react';
import { useLocation } from '@reach/router';
import { Box } from '@chakra-ui/core';
import DocsSideNavHeading from './DocsSideNavHeading';
import DocsSideNavLink from './DocsSideNavLink';

interface Section {
  menu: string | null;
  name: string;
  route: string;
  title: string;
}

interface Props {
  sections: Array<Section>;
}

const DocsSideNavContent: FC<ComponentProps<typeof Box> & Props> = ({ sections }) => {
  const { pathname } = useLocation();

  return (
    <Box as="nav" aria-label="Main navigation" fontSize="sm" p="6">
      <Box mb="10">
        <DocsSideNavHeading>Components</DocsSideNavHeading>
        {sections.map(({ route, name }) => (
          <DocsSideNavLink key={route} display="block" to={route} isActive={pathname === route}>
            {name}
          </DocsSideNavLink>
        ))}
      </Box>
    </Box>
  );
};

export default DocsSideNavContent;
