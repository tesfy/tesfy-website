import React, { FC, ComponentProps } from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody
} from '@chakra-ui/core';

export type DocsDrawerProps = ComponentProps<typeof Drawer>;

const DocsDrawer: FC<DocsDrawerProps> = ({ children, ...others }) => {
  return (
    <Drawer isOpen placement="right" {...others}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody maxH="100%" px={0}>
          {children}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DocsDrawer;
