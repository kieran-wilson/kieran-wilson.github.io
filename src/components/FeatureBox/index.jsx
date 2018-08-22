import React, { PureComponent } from 'react';
import { bool, string } from 'prop-types';
import styled from 'styled-components';
import sevenLogo from 'assets/img/logo.png';
import { autosizeItem, styledHeader, verticalWidthParent } from 'styles/mixins';

const Box = styled.div`
  position: relative;
  overflow: hidden;
  min-width: 225px;
  margin: 8px ${props => `${props.theme.columnItemSpacing}px`};
  ${autosizeItem};
`;
const BackgroundImage = styled.img`
  display: block;
  width: 100%;
  transition: transform 0.2s;

  ${Box}:hover & {
    transform: scale(1.5);
  }
`;
const BoxTitle = styled.div`
  ${verticalWidthParent};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  font-size: 1.2rem;
  color: white;
  padding: 7px;
  ${styledHeader};
`;
export const TitleLogo = styled.img`
  max-height: 30px;
`;

export default class FeatureBox extends PureComponent {
  static propTypes = {
    title: string,
    withLogo: bool,
    background: string.isRequired
  };

  render() {
    const { title, background, withLogo } = this.props;
    return (
      <Box>
        <BackgroundImage src={background} />
        <BoxTitle>
          {withLogo && <TitleLogo alt="seven logo" src={sevenLogo} />}
          <span>{title}</span>
        </BoxTitle>
      </Box>
    );
  }
}
