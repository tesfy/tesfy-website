import React, { FC } from 'react';
import { Box } from '@chakra-ui/core';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';

interface Props {
  className: string;
  children: string;
}

const CodeBlock: FC<Props> = ({ children, className }) => {
  const language = className.replace(/language-/, '') as Language;

  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children.replace(/\n$/, '')}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Box
          as="pre"
          className={className}
          my={4}
          p={6}
          fontSize="sm"
          borderRadius={10}
          overflow="auto"
          style={style}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Box>
      )}
    </Highlight>
  );
};

export default CodeBlock;
