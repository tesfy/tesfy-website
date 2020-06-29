import React, { FC } from 'react';
import { Box } from '@chakra-ui/core';
import * as Chakra from '@chakra-ui/core';
import * as Tesfy from 'tesfy';
import { LiveProvider, LiveEditor, LivePreview } from 'react-live';
import theme from 'prism-react-renderer/themes/nightOwl';
import CodeBox from '../CodeBox';

const SAMPLE_CODE = `
  function SignupButton() {
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
    const userId = '4qz936x2-62ex';
    const attributes = { countryCode: 'us' };
    const tesfy = new Tesfy.Engine({ datafile });
    const variationId = tesfy.getVariationId(
      'experiment-1',
      userId,
      attributes
    );

    let variant;

    if (variationId === '0') {
      variant = 'solid';
    } else if (variationId === '1') {
      variant = 'outline';
    } else {
      variant = 'ghost';
    }

    return (
      <Button
        as="a"
        href="https://app.tesfy.io/"
        variant={variant}>
        Sign up
      </Button>
    );
  }
`;

const HomePreview: FC = () => {
  return (
    <LiveProvider scope={{ ...Chakra, Tesfy }} language="tsx" theme={theme} code={SAMPLE_CODE}>
      <CodeBox height="360px" maxHeight="360px" fontSize="md" boxShadow="md">
        <LiveEditor padding={0} />
      </CodeBox>

      <Box my={8} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <LivePreview />
      </Box>
    </LiveProvider>
  );
};

export default HomePreview;
