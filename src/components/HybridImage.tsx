import React, { FC } from 'react';
import { useColorMode, Image, ImageProps } from '@chakra-ui/core';

export type HybridImageProps = ImageProps;

const HybridImage: FC<HybridImageProps> = ({ src, ...others }) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode !== 'light';

  return (
    <Image style={isDark ? { filter: 'invert(1) hue-rotate(180deg)' } : {}} src={src} {...others} />
  );
};

export default HybridImage;
