import React, { PureComponent } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import sevenLogo from 'assets/img/logo.png';
import tile from 'assets/img/tile.jpg';
import composite from 'assets/img/composite.jpg';
import FeatureBox from 'components/FeatureBox';
import Section from 'components/Section';
import { defaultTheme } from 'styles/theme';

const TopLevelStyled = styled.div`
  font-family: ${props => props.theme.bodyFontFamily};
`;

export default class App extends PureComponent {
  render() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <TopLevelStyled>
          <h1>The goal</h1>
          <p>
            To use
            <a href="https://styled-components.com/"> styled components </a>
            and these two assets:
          </p>
          <img alt="title" height="200" src={tile} />{' '}
          <img alt="seven logo" height="200" src={sevenLogo} />
          <p>To produce a layout that looks like</p>
          <img alt="composite" src={composite} />
          <Section>
            <FeatureBox title="Home and away" withLogo background={tile} />
            <FeatureBox title="Home and away" withLogo background={tile} />
            <FeatureBox title="Home and away" withLogo background={tile} />
            <FeatureBox title="Home and away" withLogo background={tile} />
          </Section>
          <Section>
            <FeatureBox title="Home and away" background={tile} />
            <FeatureBox title="Home and away" background={tile} />
            <FeatureBox title="Home and away" background={tile} />
            <FeatureBox title="Home and away" background={tile} />
          </Section>
        </TopLevelStyled>
      </ThemeProvider>
    );
  }
}
