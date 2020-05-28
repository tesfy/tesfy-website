import React, { FC } from 'react';
import { Box } from '@chakra-ui/core';
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
    const tesfy = new Tesfy.Engine({ datafile });
    const variationId = tesfy.getVariationId('experiment-1', userId, attributes);

    return (
      <>
        {!variationId && (
          <Button
            variantColor="green"
            variant="ghost">
            Sign up
          </Button>
        )}
        {variationId === '0' && (
          <Button
            variantColor="green"
            variant="solid"
          >
            Sign up
          </Button>
        )}
        {variationId === '1' && (
          <Button
            variantColor="green"
            variant="outline"
          >
            Sign up
          </Button>
        )}
      </>
    );
  }
`;

const HomeCodeBlock: FC = ({ children }) => {
  return (
    <LiveProvider scope={{ ...Chakra, Tesfy }} language="tsx" theme={theme} code={SAMPLE_CODE}>
      <CodeBox height="360px" maxHeight="360px">
        <LiveEditor />
      </CodeBox>

      <Box my={8} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        {children}

        <LivePreview />
      </Box>
    </LiveProvider>
  );
};

export default HomeCodeBlock;
