import React, { FC, ComponentProps } from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody
} from '@chakra-ui/core';

const DocsDrawer: FC<ComponentProps<typeof Drawer>> = ({ children, ...others }) => {
  return (
    <Drawer isOpen placement="right" {...others}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody>{children}</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DocsDrawer;
