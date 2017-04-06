import React from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Paper from 'material-ui/Paper';
import Layout from 'material-ui/Layout';

const styleSheet = createStyleSheet('MyAwesomeReactComponent', (theme) => ({
  root: {
    flexGrow: 1,
    margin: 20,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function MyAwesomeReactComponent(props, context) {
  const classes = context.styleManager.render(styleSheet);

  return (
    <div className={classes.root}>
      <Layout container gutter={8}>
        <Layout item xs={12}>
          <Paper className={classes.paper}>
            xs=12
          </Paper>
        </Layout>
        <Layout item xs={12} sm={6}>
          <Paper className={classes.paper}>
            xs=12 sm=6
          </Paper>
        </Layout>
        <Layout item xs={12} sm={6}>
          <Paper className={classes.paper}>
            xs=12 sm=6
          </Paper>
        </Layout>
        <Layout item xs={6} sm={3}>
          <Paper className={classes.paper}>
            xs=6 sm=3
          </Paper>
        </Layout>
        <Layout item xs={6} sm={3}>
          <Paper className={classes.paper}>
            xs=6 sm=3
          </Paper>
        </Layout>
        <Layout item xs={6} sm={3}>
          <Paper className={classes.paper}>
            xs=6 sm=3
          </Paper>
        </Layout>
        <Layout item xs={6} sm={3}>
          <Paper className={classes.paper}>
            xs=6 sm=3
          </Paper>
        </Layout>
      </Layout>
    </div>
  );
}

MyAwesomeReactComponent.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};
