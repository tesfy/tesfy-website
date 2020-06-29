import React, { FC } from 'react';
import { Box, BoxProps } from '@chakra-ui/core';
import useRandomInterval from './useRandomInterval';
import Sparkle from './Sparkle';

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;

type SparklesProps = BoxProps;

const getSparkle = () => {
  return {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    size: `${random(15, 20)}px`,
    style: {
      top: `${random(0, 100)}%`,
      left: `${random(0, 100)}%`
    }
  };
};

const Sparkles: FC<SparklesProps> = ({ children, ...others }) => {
  const [sparkles, setSparkles] = React.useState(() => {
    return [...Array(3).keys()].map(() => getSparkle());
  });

  useRandomInterval(
    () => {
      const sparkle = getSparkle();
      const now = Date.now();
      const nextSparkles = sparkles.filter(sp => {
        const delta = now - sp.createdAt;
        return delta < 750;
      });
      nextSparkles.push(sparkle);
      setSparkles(nextSparkles);
    },
    50,
    450
  );

  return (
    <Box as="span" display="inline-block" position="relative" {...others}>
      {sparkles.map(sparkle => (
        <Sparkle key={sparkle.id} size={sparkle.size} style={sparkle.style} />
      ))}
      <Box as="strong" position="relative" fontWeight="bold">
        {children}
      </Box>
    </Box>
  );
};

export default Sparkles;
