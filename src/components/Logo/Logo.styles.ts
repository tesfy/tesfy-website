import styled from '@emotion/styled';

export const LogoStyled = styled.span`
  ${({ size, theme }) => `
    svg {
      width: ${size};
    }

    path {
      stroke: ${theme.colors.green[500]};
      fill: ${theme.colors.green[500]};
    }
  `}
`;
