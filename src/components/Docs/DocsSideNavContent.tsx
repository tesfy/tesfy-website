import React, { FC } from 'react';
import { Box, BoxProps } from '@chakra-ui/core';
import { NavContent, NavSection } from './useDocsNav';
import DocsSideNavHeading from './DocsSideNavHeading';
import DocsSideNavLink from './DocsSideNavLink';

export type DocsSideNavContentProps = BoxProps & {
  content: NavContent;
};

const DocsSideNavContent: FC<DocsSideNavContentProps> = ({ content, ...others }) => {
  return (
    <Box
      as="nav"
      aria-label="Main navigation"
      fontSize="sm"
      position="relative"
      overflowY="auto"
      {...others}
    >
      {Object.keys(content).map(key => {
        if (!Array.isArray(content[key])) {
          const { name, route } = content[key] as NavSection;

          return (
            <DocsSideNavLink key={route} title={name} to={route}>
              {name}
            </DocsSideNavLink>
          );
        }

        const sections = content[key] as Array<NavSection>;

        return (
          <Box key={key}>
            <DocsSideNavHeading>{key}</DocsSideNavHeading>
            {sections.map(({ name, route }) => (
              <DocsSideNavLink key={route} title={`${name} - ${key}`} to={route}>
                {name}
              </DocsSideNavLink>
            ))}
          </Box>
        );
      })}
    </Box>
  );
};

export default DocsSideNavContent;
