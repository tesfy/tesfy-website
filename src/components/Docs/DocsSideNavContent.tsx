import React, { FC, ComponentProps } from 'react';
import { Box } from '@chakra-ui/core';
import DocsSideNavHeading from './DocsSideNavHeading';
import DocsSideNavLink from './DocsSideNavLink';

export interface NavSection {
  menu: string | null;
  name: string;
  route: string;
  title: string;
  order?: number;
}

export interface NavContent {
  [key: string]: NavSection | Array<NavSection>;
}

interface Props {
  content: NavContent;
}

const DocsSideNavContent: FC<ComponentProps<typeof Box> & Props> = ({ content }) => {
  return (
    <Box as="nav" aria-label="Main navigation" fontSize="sm" p="6">
      <Box mb="10">
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
            <>
              <DocsSideNavHeading key={key}>{key}</DocsSideNavHeading>
              {sections.map(({ name, route }) => (
                <DocsSideNavLink key={route} title={`${name} - ${key}`} to={route}>
                  {name}
                </DocsSideNavLink>
              ))}
            </>
          );
        })}
      </Box>
    </Box>
  );
};

export default DocsSideNavContent;
