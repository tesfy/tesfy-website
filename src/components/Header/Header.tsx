import React, { FC, ComponentProps } from 'react';
import { useColorMode, Box, IconButton } from '@chakra-ui/core';
import { DiGithubBadge } from 'react-icons/di';
import LogoIcon from '@/assets/logo.svg';

const Header: FC<ComponentProps<typeof Box>> = props => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = { light: 'white', dark: 'gray.800' };

  return (
    <Box
      as="header"
      pos="fixed"
      top="0"
      left="0"
      width="full"
      height="62px"
      zIndex={1}
      backgroundColor={bgColor[colorMode]}
      boxShadow="sm"
      {...props}
    >
      <Box
        paddingX="2"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box as={LogoIcon} height="40px" width="auto" fill="green.500" />

        <Box>
          <IconButton
            onClick={toggleColorMode}
            aria-label="rico"
            fontSize="24px"
            variant="ghost"
            mr="2"
            icon="sun"
            isRound
          />

          <IconButton
            as="a"
            aria-label="rico"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/andresz1/tesfy"
            variant="ghost"
            fontSize="24px"
            icon={DiGithubBadge}
            isRound
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
