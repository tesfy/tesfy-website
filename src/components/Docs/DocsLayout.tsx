import React, { useState, FC } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { useStaticQuery, graphql } from 'gatsby';
import { Box, IconButton } from '@chakra-ui/core';
import { FiMenu } from 'react-icons/fi';
import Header from '../Header';
import Container from '../Container';
import DocsSideNav from './DocsSideNav';
import DocsSideNavContent from './DocsSideNavContent';
import DocsDrawer from './DocsDrawer';
import H1 from '../MDX/H1';
import H2 from '../MDX/H1';
import H3 from '../MDX/H1';
import P from '../MDX/P';
import InlineCode from '../MDX/InlineCode';
import CodeBlock from '../MDX/CodeBlock';
import UL from '../MDX/UL';
import LI from '../MDX/LI';
import OL from '../MDX/OL';
import Table from '../MDX/Table';
import THead from '../MDX/THead';
import TData from '../MDX/TData';
import Layout from '../Layout';

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  ul: UL,
  li: LI,
  ol: OL,
  table: Table,
  th: THead,
  td: TData,
  code: CodeBlock,
  inlineCode: InlineCode,
  layout: Layout
};

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
          }
        }
      }
    }
  }
`;

const DocsLayout: FC = ({ children }) => {
  const { allMdx } = useStaticQuery(query);
  const sections = allMdx.edges.map(edge => edge.node.frontmatter);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header>
        <IconButton
          display={{ sm: 'inline-flex', md: 'none' }}
          aria-label="Navigation Menu"
          fontSize="20px"
          variant="ghost"
          icon={FiMenu}
          onClick={handleToggle}
        />
      </Header>

      <DocsSideNav
        display={['none', null, 'block']}
        top="62px"
        height="calc(100% - 62px)"
        maxWidth="18rem"
      >
        <DocsSideNavContent sections={sections} />
      </DocsSideNav>

      <DocsDrawer isOpen={isOpen} onClose={handleToggle}>
        <DocsSideNavContent sections={sections} />
      </DocsDrawer>

      <Box pt="62px" pl={[0, null, '18rem']}>
        <Container maxWidth="46rem">
          <MDXProvider components={components}>{children}</MDXProvider>
        </Container>
      </Box>
    </>
  );
};

export default DocsLayout;
