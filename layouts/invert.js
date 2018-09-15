import React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';
import { ThemeProvider } from 'emotion-theming';
import { theme } from '@sumup/circuit-ui';

const Invert = styled.div(
  [],
  {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& a': {
      color: 'inherit'
    }
  },
  color
);

Invert.defaultProps = {
  color: 'background',
  bg: theme.circuit.colors.p700
};

export default ({ children }) => (
  <ThemeProvider theme={theme.circuit}>
    <Invert>{children}</Invert>
  </ThemeProvider>
);
