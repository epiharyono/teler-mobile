import React, {Component} from 'react'
import {Container, Content, Text, Button, List, ListItem, Spinner, Left, Right, Thumbnail, Body, Card, CardItem, Icon, View} from 'native-base'
import {connect} from 'react-redux'
import {AsyncStorage, StyleSheet, Alert} from 'react-native'
import axios from 'axios'

import {allOrder} from '../_redux/actions/order'

export class TransaksiDetail extends Component {

    static navigationOptions = {
        headerTitle: 'Pembayaran',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: null
    }

    state = {
        title:'',
        url: '',
        btnByr: true
    }

    async _refetch(){
        const url = this.props.navigation.getParam('url')
        const head = this.props.navigation.getParam('head')
        const token = await AsyncStorage.getItem('token')
        this.props.dispatch(allOrder(url,token))

    }

    componentWillMount() {
      this._refetch()
      const url = this.props.navigation.getParam('url')
      this.setState({ url: url })
      // alert(JSON.stringify(this.props.order.data.bayar))
    }

    prosesPembayaran(){
        this.setState({ btnByr: false })
        alert('Sukses')
    }

    buttonConfirm() {
        Alert.alert(
          'Konfirmasi',
          'Anda Ingin Melakukan Pembayaran?',
          [
            {text: 'TIDAK', onPress: () => console.warn('NO Pressed'), style: 'cancel'},
            {text: 'YA', onPress: () => this.prosesPembayaran() },
          ]
        );
    }

    render() {
      const {sub_byr,ppn,tot_byr} = this.props.order.data
      let disabled = false
      if(tot_byr < 1){  disabled = true}
      return (
          <Container>
              <Content>
               <View style={styles.mainContainer}>
                   <View style={styles.content}>
                       <View style={styles.messageBox}>
                           <View>
                               <Text style={styles.messageBoxBodyText}>Sub Total : Rp. {sub_byr} </Text>
                               <Text style={styles.messageBoxBodyText}>Pajak : Rp. {ppn} </Text>
                               <Text style={styles.messageBoxBodyText}>Total : Rp. {tot_byr}</Text>
                           </View>
                       </View>
                   </View>
               </View>
               <View style={styles.mainContainer}>

                         <View style={styles.content}>
                             <View>
                                 <Button disabled={disabled} rounded danger onPress={() => this.buttonConfirm()}>
                                   <Icon name='swap'/>
                                   <Text style={styles.messageBoxBodyText} >Bayar </Text>
                                 </Button>
                             </View>
                         </View>

                   <View style={styles.content}>
                       <View>
                           <Button disabled success onPress={()=> this.props.navigation.navigate('HomeScreen')}>
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
      )
    }

}

const mapStateToProps = ({order})=> ({
  order
})

export default connect(mapStateToProps)(TransaksiDetail)

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1, flexDirection: 'row'
    },
    content:{
        paddingTop:10,
        paddingBottom:20,
        paddingLeft:10,
        paddingRight:0,
        borderRadius:10,
    },
    messageBox:{
        backgroundColor:'#ef553a',
        width:300,
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
