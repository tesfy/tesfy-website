import React, { FC } from 'react';
import { ComponentsProvider } from 'docz';
import H1 from '../components/MDX/H1';
import H2 from '../components/MDX/H1';
import H3 from '../components/MDX/H1';
import P from '../components/MDX/P';
import InlineCode from '../components/MDX/InlineCode';
import CodeBlock from '../components/MDX/CodeBlock';
import UL from '../components/MDX/UL';
import LI from '../components/MDX/LI';
import OL from '../components/MDX/OL';
import Table from '../components/MDX/Table';
import THead from '../components/MDX/THead';
import TData from '../components/MDX/TData';
import Layout from '../components/Layout';

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  ul: UL,
  li: LI,
  ol: OL,
  table: Table,
  th: THead,
  td: TData,
  code: CodeBlock,
  inlineCode: InlineCode,
  layout: Layout
};

const Theme: FC = ({ children }) => {
  return <ComponentsProvider components={components}>{children}</ComponentsProvider>;
};

export default Theme;
