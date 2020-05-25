import React, { FC, ComponentProps } from 'react';
import { Link } from 'gatsby';
import { useColorMode, Box, Button, IconButton } from '@chakra-ui/core';
import { FiSun, FiMoon, FiGithub } from 'react-icons/fi';
import LogoIcon from '@/assets/logo.svg';

const Header: FC<ComponentProps<typeof Box>> = ({ children, ...others }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLight = colorMode === 'light';
  const bgColor = { light: 'white', dark: 'gray.800' };

  return (
    <Box
      as="header"
      pos="fixed"
      top="0"
      left="0"
      width="full"
      zIndex={1}
      backgroundColor={bgColor[colorMode]}
      boxShadow="sm"
      {...others}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px={{ xs: 2, md: 4 }}
        height="100%"
      >
        <Link to="/">
          <Box as={LogoIcon} height="40px" width="auto" fill="green.500" />
        </Link>

        <Box display="flex">
          <Button as="a" mr={2} variantColor="green" href="https://app.tesfy.io">
            Sign in
          </Button>

          <IconButton
            aria-label={`Swith to ${isLight ? 'dark' : 'light'}`}
            fontSize="xl"
            variant="ghost"
            mr="2"
            icon={isLight ? FiMoon : FiSun}
            onClick={toggleColorMode}
            isRound
          />

          <IconButton
            as="a"
            display={{ xs: 'none', md: 'inline-flex' }}
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/andresz1/tesfy"
            variant="ghost"
            fontSize="xl"
            icon={FiGithub}
            isRound
          />

          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
