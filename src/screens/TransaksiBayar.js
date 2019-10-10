import React, {Component} from 'react'
import {Container, Content, Text, Button, List, ListItem, Spinner, Left, Right, Thumbnail, Body, Card, CardItem, Icon, View} from 'native-base'
import {connect} from 'react-redux'
import {AsyncStorage, StyleSheet} from 'react-native'
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
        url: ''
    }

    async _refetch(){
        const url = this.props.navigation.getParam('url')
        const head = this.props.navigation.getParam('head')
        const token = await AsyncStorage.getItem('token')
        this.props.dispatch(allOrder(url,token))

    }

    componentWillMount() {
      // this._refetch()
      const url = this.props.navigation.getParam('url')
      this.setState({ url: url })
    }

    render() {
      return (
          <Container>
              <Content>
                <Text>xxx {this.state.url} </Text>

                <Card>
                  <CardItem header>
                    <Text>Proses</Text>
                  </CardItem>
                  <CardItem>
                    <Body>

                        <View style={{flex: 1, height: 12, justifyContent: 'center'}}>
                          <Button block> <Text>Login</Text> </Button>
                        </View>

                    </Body>
                  </CardItem>
                  <CardItem footer>
                    <Text>Menu </Text>
                  </CardItem>
               </Card>

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
    container: {
      flex: 1,
      alignItems: 'center'
    },
    image: {
      marginTop: 50
    },
    bottom: {
      flex: 1,
      position: 'absolute',
      padding: '10%', alignSelf: 'center'
    }
})
