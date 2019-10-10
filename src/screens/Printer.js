import React, { Component } from 'react'
import { Container, Header, Content, Icon } from 'native-base'

import {BluetoothManager,BluetoothEscposPrinter,BluetoothTscPrinter} from 'react-native-bluetooth-escpos-printer'

// import RNHTMLtoPDF from 'react-native-html-to-pdf';
// import RNPrint from 'react-native-print';


export default class IconExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Icon name='home' />
          <Icon ios='ios-menu' android="md-apps" style={{fontSize: 20, color: 'red'}}/>
          <Icon type="FontAwesome" name="home" />
        </Content>
      </Container>
    );
  }
}
