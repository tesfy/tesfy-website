import React, { useState, FC } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Box, IconButton } from '@chakra-ui/core';
import { FiMenu } from 'react-icons/fi';
import useDocsNav from './useDocsNav';
import Header from '../Header';
import Container from '../Container';
import DocsSideNav from './DocsSideNav';
import DocsSideNavContent from './DocsSideNavContent';
import DocsDrawer from './DocsDrawer';
import components from '../MDX';

const DocsLayout: FC = ({ children }) => {
  const content = useDocsNav();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header height="62px">
        <Box display={{ sm: 'inline-flex', md: 'none' }} ml={2}>
          <IconButton
            aria-label="Navigation Menu"
            fontSize="xl"
            variant="ghost"
            icon={FiMenu}
            onClick={handleToggle}
            isRound
          />
        </Box>
      </Header>

      <DocsSideNav display={['none', null, 'block']} top="62px" h="calc(100% - 62px)" maxW="280px">
        <DocsSideNavContent p="6" content={content} />
      </DocsSideNav>

      <DocsDrawer isOpen={isOpen} onClose={handleToggle}>
        <DocsSideNavContent mt="8" px="6" maxH="100%" content={content} />
      </DocsDrawer>

      <Box pt="62px" pb={6} pl={[0, null, '280px']}>
        <Container maxW="740px">
          <MDXProvider components={components}>{children}</MDXProvider>
        </Container>
      </Box>
    </>
  );
};

export default DocsLayout;
