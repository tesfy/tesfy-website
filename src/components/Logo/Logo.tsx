/* eslint-disable @typescript-eslint/ban-ts-ignore */

import React from 'react';
// @ts-ignore
import LogoIcon from '../../../assets/logo.svg';
import { LogoStyled } from './Logo.styles';

interface Props {
  size?: string;
}

const Logo = ({ size = '80px' }: Props) => {
  return (
    <LogoStyled size={size}>
      <LogoIcon />
    </LogoStyled>
  );
};

export default Logo;
