import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import {HomeScreen, Transaksi, Login, Icon, Footer, Logout, TransaksiDetail} from '../screens'


const AppNavigator = createStackNavigator({
    HomeScreen: {
      screen: HomeScreen,
    },
    Transaksi: {
      screen: Transaksi,
    },
    TransaksiDetail: {
      screen: TransaksiDetail,
    },
  	Login: {
  		screen: Login
  	},
  	Logout: {
  		screen: Logout
  	},
  	Icon: {
  		screen: Icon
  	},
    Footer: { screen: Footer }
}, {
  initialRouteName: 'Login',
});

export default AppNavigator;
