import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/core';
import * as Chakra from '@chakra-ui/core';
import * as Tesfy from 'tesfy';
import { LiveProvider, LiveEditor, LivePreview } from 'react-live';
import theme from 'prism-react-renderer/themes/nightOwl';
import CodeBox from '../CodeBox';

const SAMPLE_CODE = `
  function Example() {
    const datafile = {
      experiments: {
        'experiment-1': {
          id: 'experiment-1',
          percentage: 100,
          variations: [
            { id: '0', percentage: 50 },
            { id: '1', percentage: 50 }
          ],
          audience: {
            '==' : [{ var : 'countryCode' }, 'us']
          }
        }
      }
    };
    const userId = '676380e0';
    const attributes = { countryCode: 'us' };
    const tesfy = new Tesfy.Engine(datafile);
    const variationId = tesfy.getVariationId('experiment-1', userId, attributes);

    return (
      <>
        {!variationId && (
          <Button>Solid</Button>
        )}
        {variationId === '0' && (
          <Button variant="ghost">Ghost</Button>
        )}
        {variationId === '1' && (
          <Button variant="outline">Outline</Button>
        )}
      </>
    );
  }
`;

const HomeCodeBlock = () => {
  return (
    <LiveProvider scope={{ ...Chakra, Tesfy }} language="tsx" theme={theme} code={SAMPLE_CODE}>
      <CodeBox height="360px" maxHeight="360px">
        <LiveEditor />
      </CodeBox>

      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Box my={4} textAlign="center">
          <Heading fontSize="2xl" fontWeight="bold" color="green.500">
            Try it out!
          </Heading>
          <Text mt={1} fontSize="md">
            Change some variables and spot the magic ✨
          </Text>
        </Box>

        <LivePreview />
      </Box>
    </LiveProvider>
  );
};

export default HomeCodeBlock;
