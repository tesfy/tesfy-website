import React, { FC } from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import CodeBox from '../CodeBox';

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
        <CodeBox as="pre" className={className} my={4} p={6} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </CodeBox>
      )}
    </Highlight>
  );
};

export default CodeBlock;
