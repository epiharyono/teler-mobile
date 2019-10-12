import React, { Component } from 'react'
import { Container, Header, Content, Button, Icon } from 'native-base'
import { View, StyleSheet, Text } from 'react-native';
// import { Icon } from 'react-native-elements'

// import {BluetoothManager,BluetoothEscposPrinter,BluetoothTscPrinter} from 'react-native-bluetooth-escpos-printer'

// import RNHTMLtoPDF from 'react-native-html-to-pdf';
// import RNPrint from 'react-native-print';


export default class IconExample extends Component {

  static navigationOptions = {
      headerTitle: 'Setting Printer',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
  }

  componentDidMount(){
      // BluetoothManager.isBluetoothEnabled().then((enabled)=> {
      //     alert(enabled) // enabled ==> true /false
      // }, (err)=> {
      //     alert(err)
      // })
  }

  async tesPrint(){
      alert('print')
      // await BluetoothEscposPrinter.printerInit();
      // await  BluetoothEscposPrinter.printText("I am an english\r\n\r\n", {});
  }

  render() {
    return (
      <Container>
        <Content>
            <View style={styles.mainContainer}>
                <View style={styles.content}>
                    <View style={styles.messageBox}>
                        <View>
                            <Text style={styles.messageBoxBodyText}>Sub Total : </Text>
                            <Text style={styles.messageBoxBodyText}>Pajak : .</Text>
                            <Text style={styles.messageBoxBodyText}>Total : .</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.mainContainer}>
                <View style={styles.content}>
                    <View>
                        <Button danger>
                          <Icon name='swap'/>
                          <Text style={styles.messageBoxBodyText}>Bayar</Text>
                        </Button>
                    </View>
                </View>
                <View style={styles.content}>
                    <View>
                        <Button success onPress={() => this.tesPrint()} >
                          <Icon name='print' />
                          <Text style={styles.messageBoxBodyText}>Print</Text>
                        </Button>
                    </View>
                </View>
                <View style={styles.content}>
                    <View>
                        <Button onPress={()=> this.props.navigation.navigate('HomeScreen')}>
                          <Icon name='home' />
                          <Text style={styles.messageBoxBodyText}>Home</Text>
                        </Button>
                    </View>
                </View>

            </View>

        </Content>
      </Container>
    );
  }
}


var styles = StyleSheet.create({
    mainContainer:{
        flex: 1, flexDirection: 'row'
    },
    content:{
        paddingTop:10,
        paddingBottom:20,
        paddingLeft:20,
        paddingRight:0,
        borderRadius:10,
    },
    messageBox:{
        backgroundColor:'#ef553a',
        // width:300,
        paddingTop:10,
        paddingBottom:20,
        paddingLeft:20,
        paddingRight:20,
        borderRadius:10
    },
    messageBoxTitleText:{
        fontWeight:'bold',
        color:'#fff',
        textAlign:'center',
        fontSize:20,
        marginBottom:10
    },
    messageBoxBodyText:{
        color:'#fff',
        fontSize:16,
        paddingLeft:0,
        paddingRight:20,
    }
})
