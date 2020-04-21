import React, { useState, FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Box, IconButton } from '@chakra-ui/core';
import { FiMenu } from 'react-icons/fi';
import Header from '../Header';
import Container from '../Container';
import DocsSideNav from './DocsSideNav';
import DocsSideNavContent, { NavContent, NavSection } from './DocsSideNavContent';
import DocsDrawer from './DocsDrawer';

const query = graphql`
  query MyQuery {
    allMdx {
      edges {
        node {
          frontmatter {
            menu
            name
            route
            title
            order
          }
        }
      }
    }
  }
`;

const MENU = ['JavaScript', 'React'];

const DocsLayout: FC = ({ children }) => {
  const { allMdx } = useStaticQuery(query);
  const [isOpen, setIsOpen] = useState(false);

  const getSections = (): Array<NavSection> => {
    return allMdx.edges.map((edge: Record<string, any>) => edge.node.frontmatter);
  };

  const getContent = (): NavContent => {
    const sections = getSections();

    return sections
      .sort((prevSection, nextSection) => {
        const prevIndex = MENU.indexOf(prevSection.menu || prevSection.name);
        const nextIndex = MENU.indexOf(nextSection.menu || nextSection.name);

        if (prevIndex === nextIndex) {
          const { order: prevOrder = 0 } = prevSection;
          const { order: nextOrder = 0 } = nextSection;

          return nextOrder - prevOrder;
        }

        return prevIndex - nextIndex;
      })
      .reduce((map: NavContent, section: NavSection) => {
        const { menu, name } = section;

        if (!menu) {
          return {
            ...map,
            [name]: section
          };
        }

        const sections = (map[menu] || []) as Array<NavSection>;

        return {
          ...map,
          [menu]: [...sections, section]
        };
      }, {});
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const content = getContent();

  return (
    <>
      <Header>
        <Box display={{ sm: 'inline-flex', md: 'none' }} ml={2}>
          <IconButton
            aria-label="Navigation Menu"
            fontSize="24px"
            variant="ghost"
            icon={FiMenu}
            onClick={handleToggle}
            isRound
          />
        </Box>
      </Header>

      <DocsSideNav
        display={['none', null, 'block']}
        top="62px"
        height="calc(100% - 62px)"
        maxWidth="18rem"
      >
        <DocsSideNavContent content={content} />
      </DocsSideNav>

      <DocsDrawer isOpen={isOpen} onClose={handleToggle}>
        <DocsSideNavContent content={content} />
      </DocsDrawer>

      <Box pt="62px" pl={[0, null, '18rem']}>
        <Container maxWidth="46rem">{children}</Container>
      </Box>
    </>
  );
};

export default DocsLayout;
