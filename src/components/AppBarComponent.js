import React, { Component } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';

import customPropTypes from 'material-ui/utils/customPropTypes';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Text from 'material-ui/Text';
import Button from 'material-ui/Button';

const styleSheet = createStyleSheet('AppBarComponent', () => ({
  root: {
    position: 'relative',
    marginTop: 0,
    width: '100%',
  },
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  list: {
    width: 250,
    flex: 'initial',
  },
  remainder: {
    flex: 1,
  },
}));

export default class AppBarComponent extends Component {
  state = {
    user: 'Johannes'
  };

  render() {

    const classes = this.context.styleManager.render(styleSheet);

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Text type="title" colorInherit className={classes.flex}>{this.props.title}</Text>
            <Button contrast>{this.state.user}</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

AppBarComponent.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};