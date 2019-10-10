import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import {HomeScreen, Transaksi, Login, Printer, Footer, Logout, TransaksiDetail, TransaksiBayar} from '../screens'


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
    TransaksiBayar: { screen: TransaksiBayar },
  	Login: {
  		screen: Login
  	},
  	Logout: {
  		screen: Logout
  	},
  	Printer: { screen: Printer },
    Footer: { screen: Footer }
}, {
  initialRouteName: 'HomeScreen',
});

export default AppNavigator;
