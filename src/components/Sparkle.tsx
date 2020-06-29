import React, { FC } from 'react';
import { keyframes } from '@emotion/core';
import { Box, BoxProps } from '@chakra-ui/core';
import SparkleIcon from '@/assets/svgs/sparkle.svg';

type SparkleProps = BoxProps;

const enter = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`;

const Sparkle: FC<SparkleProps> = ({ size, style, ...others }) => {
  return (
    <Box
      as="span"
      display="block"
      position="absolute"
      animation={`${enter} 700ms forwards`}
      style={style}
      zIndex={1}
      {...others}
    >
      <Box
        as={SparkleIcon}
        width={size}
        height={size}
        display="block"
        animation={`${spin} 1000ms linear`}
      />
    </Box>
  );
};

export default Sparkle;
