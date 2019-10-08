import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'
import {reduxifyNavigator} from 'react-navigation-redux-helpers'
import {connect, Provider} from 'react-redux'
import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers'

import store from './src/_redux/store'
import AppNavigator from './src/_navigators'


const navMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

const App = reduxifyNavigator(AppNavigator, "root");
const mapStateToProps = (state) => ({
  state: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(App);

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState/>
      </Provider>
    );
  }
}
