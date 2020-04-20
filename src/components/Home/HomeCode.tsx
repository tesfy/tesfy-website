import React from 'react';
import { Box } from '@chakra-ui/core';
import * as Chakra from '@chakra-ui/core';
import * as Tesfy from 'react-tesfy';
import { LiveProvider, LiveEditor, LivePreview, LiveError } from 'react-live';
import theme from 'prism-react-renderer/themes/nightOwl';

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
    const userId = '676380e0-7793-44d6-9189-eb5868e17a86';
    const attributes = { countryCode: 'us' };

    return (
      <TesfyProvider
        datafile={datafile}
        userId={userId}
        attributes={attributes}
      >
        <Experiment id="experiment-1">
          <Variation id="0">
            <Button>1</Button>
          </Variation>

          <Variation id="1">
            <Button>2</Button>
          </Variation>
        </Experiment>
      </TesfyProvider>
    );
  }
`;

const HomeCode = () => {
  return (
    <LiveProvider scope={{ ...Chakra, ...Tesfy }} language="tsx" theme={theme} code={SAMPLE_CODE}>
      <Box height="360px" maxHeight="360px" overflow="auto">
        <LiveEditor />
      </Box>
      <Box as={LivePreview} mt={4} />
      <LiveError />
    </LiveProvider>
  );
};

export default HomeCode;
