import { css } from 'styled-components';

export const styledHeader = css`
  font-family: ${props => props.theme.headerFontFamily};
  font-weight: bold;
`;
export const autosizeItem = css`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
`;

export const verticalWidthParent = css`
  display: flex;
  align-items: center;
`;
