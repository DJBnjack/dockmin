import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createPalette from 'material-ui/styles/palette';
import createMuiTheme from 'material-ui/styles/theme';
import { blue, pink } from 'material-ui/styles/colors';

import MyAwesomeReactComponent from './components/MyAwesomeReactComponent';
import AppBarComponent from './components/AppBarComponent';

const palette = createPalette({
  primary: blue,
  accent: pink,
  type: 'light',
});

const { styleManager, theme } = MuiThemeProvider.createDefaultContext({
  theme: createMuiTheme({ palette }),
});

const App = () => (
  <MuiThemeProvider theme={theme} styleManager={styleManager}>
    <div>
      <AppBarComponent title='Dockmin' />
      <MyAwesomeReactComponent />
    </div>
  </MuiThemeProvider>
);

export default App;