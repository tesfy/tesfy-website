import H1 from './H1';
import H2 from './H2';
import H3 from './H3';
import P from './P';
import InlineCode from './InlineCode';
import CodeBlock from './CodeBlock';
import Link from './Link';
import UL from './UL';
import LI from './LI';
import OL from './OL';
import Table from './Table';
import THead from './THead';
import TData from './TData';

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  ul: UL,
  li: LI,
  ol: OL,
  a: Link,
  table: Table,
  th: THead,
  td: TData,
  code: CodeBlock,
  inlineCode: InlineCode
};

export default components;
